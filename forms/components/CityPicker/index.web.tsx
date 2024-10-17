import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

import Picker from "@/forms/components/Picker";
import { pickerAdaptor as cities } from "@/utils/data/cities";

type Props = {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onChangeText: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
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
