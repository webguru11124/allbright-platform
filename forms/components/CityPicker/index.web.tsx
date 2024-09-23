import Picker from "@/forms/components/Picker";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  TargetedEvent,
} from "react-native";

import { pickerAdaptor as cities } from "@/utils/data/cities";

type Props = {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  error: string | undefined;
};

const CityPicker = ({
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
      items={cities}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default CityPicker;
