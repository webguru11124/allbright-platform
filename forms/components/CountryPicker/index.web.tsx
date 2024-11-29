import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

import Picker from "@/forms/components/Picker";
import { pickerAdaptor as countries } from "@/utils/data/countries";

type Props = {
  value: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  error: string | undefined;
};

const CountryPicker = ({ value, placeholder, onChangeText, onBlur, error }: Props) => {
  return (
    <Picker
      placeholder={placeholder}
      selectedValue={value}
      onValueChange={onChangeText}
      items={countries}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default CountryPicker;
