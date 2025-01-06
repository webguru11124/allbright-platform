import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

import Picker from "@/forms/components/Picker";
import { pickerAdaptor as industries } from "@/utils/data/industries";

type Props = {
  value: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  error: string | undefined;
};

const IndustryPicker = ({ value, placeholder, onChangeText, onBlur, error }: Props) => {
  return (
    <Picker
      placeholder={placeholder}
      selectedValue={value}
      onValueChange={onChangeText}
      items={industries}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default IndustryPicker;
