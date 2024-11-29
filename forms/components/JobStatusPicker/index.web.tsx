import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

import Picker from "@/forms/components/Picker";
import { pickerAdaptor as jobStatus } from "@/utils/data/jobStatus";

type Props = {
  value: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  error: string | undefined;
};

const JobStatusPicker = ({ value, placeholder, onChangeText, onBlur, error }: Props) => {
  return (
    <Picker
      placeholder={placeholder}
      selectedValue={value}
      onValueChange={onChangeText}
      items={jobStatus}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default JobStatusPicker;
