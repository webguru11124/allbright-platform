import Picker from "@/forms/components/Picker";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

import { pickerAdaptor as salary } from "@/utils/data/salary";

type Props = {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  error: string | undefined;
};

const SalaryPicker = ({
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
      items={salary}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default SalaryPicker;
