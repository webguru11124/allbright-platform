import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

import Picker from "@/forms/components/Picker";
import { pickerAdaptor as jobLevels } from "@/utils/data/jobLevels";

type Props = {
  value: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  error: string | undefined;
};

const JobLevelPicker = ({
  value,
  placeholder,
  onChangeText,
  onBlur,
  error,
}: Props) => {
  return (
    <Picker
      placeholder={placeholder}
      selectedValue={value}
      onValueChange={onChangeText}
      items={jobLevels}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default JobLevelPicker;
