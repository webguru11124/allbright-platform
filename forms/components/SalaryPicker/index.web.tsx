import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

import Picker from "@/forms/components/Picker";
import { pickerAdaptor as salary } from "@/utils/data/salary";

type Props = {
  value: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  error: string | undefined;
};

const SalaryPicker = ({ value, placeholder, onChangeText, onBlur, error }: Props) => {
  return (
    <Picker
      placeholder={placeholder}
      selectedValue={value}
      onValueChange={onChangeText}
      items={salary}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default SalaryPicker;
