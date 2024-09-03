import { Picker as NativePicker } from "@react-native-picker/picker";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

type Props = {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  onValueChange: GestureEvent;
  items: {
    key: string;
    label: string;
    value: string;
  }[];
};

const Picker = ({ selectedValue, onValueChange, items }: Props) => {
  return (
    <NativePicker selectedValue={selectedValue} onValueChange={onValueChange}>
      <NativePicker.Item key={"-1"} label={"Please select"} value={undefined} />
      {items.map(({ key, label, value }) => (
        <NativePicker.Item key={key} label={label} value={value} />
      ))}
    </NativePicker>
  );
};

export default Picker;
