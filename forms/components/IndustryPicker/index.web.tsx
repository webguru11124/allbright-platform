import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

import Picker from "@/forms/components/Picker";
import { pickerAdaptor as industries } from "@/utils/data/industries";

type Props = {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  error: string | undefined;
};

const IndustryPicker = ({
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
      items={industries}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default IndustryPicker;
