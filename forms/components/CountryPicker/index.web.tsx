import Picker from "@/forms/components/Picker";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  TargetedEvent,
} from "react-native";

import { pickerAdaptor as countries } from "@/utils/data/countries";

type Props = {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  onValueChange: (itemValue: unknown, itemIndex: number) => void;
  onBlur: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  error: string | undefined;
};

const CountryPicker = ({
  selectedValue,
  onValueChange,
  onBlur,
  error,
}: Props) => {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      items={countries}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default CountryPicker;
