import { useMemo } from "react";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

import Picker from "@/forms/components/Picker";
import OnboardingClient from "@/utils/client/user/OnboardingClient";
import { City } from "@/utils/data/cities";
import countries from "@/utils/data/countries";

type Props = {
  value: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  error: string | undefined;
  selectedCountry?: (typeof countries)[number]["Name"] | null;
  disabled?: boolean;
};

const CityPicker = ({ value, placeholder, onChangeText, selectedCountry, onBlur, error, disabled }: Props) => {
  const cities: City[] = useMemo(() => {
    return new OnboardingClient().getCities(selectedCountry);
  }, [selectedCountry]);

  return (
    <Picker
      placeholder={placeholder}
      selectedValue={value}
      onValueChange={onChangeText}
      items={cities}
      error={error}
      onBlur={onBlur}
      enabled={!disabled}
    />
  );
};

export default CityPicker;
