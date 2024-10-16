import Picker from "@/forms/components/Picker";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import { pickerAdaptor as jobStatus } from "@/utils/data/jobStatus";

type Props = {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  error: string | undefined;
};

const JobStatusPicker = ({
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
      items={jobStatus}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default JobStatusPicker;
