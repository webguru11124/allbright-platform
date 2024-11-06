import { useMemo } from "react";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

import Picker from "@/forms/components/Picker";
import OnboardingClient from "@/utils/client/user/OnboardingClient";
import { pickerAdaptor as cities } from "@/utils/data/cities";
import countries from "@/utils/data/countries";

type Props = {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  error: string | undefined;
  selectedCountry?: (typeof countries)[number]["Name"] | null;
  disabled?: boolean;
};

const CityPicker = ({
  selectedValue,
  placeholder,
  onChangeText,
  selectedCountry,
  onBlur,
  error,
  disabled,
}: Props) => {
  const filteredCities = useMemo(() => {
    if (!selectedCountry) return cities;
    const countryCities = new OnboardingClient().getCities(selectedCountry);
    return cities.filter((item) =>
      countryCities.find((city) => city === item.value)
    );
  }, [selectedCountry]);

  return (
    <Picker
      placeholder={placeholder}
      selectedValue={selectedValue}
      onValueChange={onChangeText}
      items={filteredCities}
      error={error}
      onBlur={onBlur}
      enabled={!disabled}
    />
  );
};

export default CityPicker;
