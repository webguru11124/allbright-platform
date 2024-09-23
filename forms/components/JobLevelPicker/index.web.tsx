import Picker from "@/forms/components/Picker";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  TargetedEvent,
} from "react-native";

import { pickerAdaptor as jobLevels } from "@/utils/data/jobLevels";

type Props = {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  error: string | undefined;
};

const JobLevelPicker = ({
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
      items={jobLevels}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default JobLevelPicker;
