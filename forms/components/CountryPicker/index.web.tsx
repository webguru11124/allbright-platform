import Picker from "@/forms/components/Picker";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  TargetedEvent,
} from "react-native";

import { pickerAdaptor as countries } from "@/utils/data/countries";

type Props = {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  error: string | undefined;
};

const CountryPicker = ({
  selectedValue,
  placeholder,
  onChangeText,
  onBlur,
  error,
}: Props) => {
  return (
    <Picker
      placeholder={placeholder}
      selectedValue={selectedValue}
      onValueChange={onChangeText}
      items={countries}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default CountryPicker;
