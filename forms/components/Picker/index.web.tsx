import { Picker as NativePicker, PickerProps } from "@react-native-picker/picker";
import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet } from "react-native";

import { CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = PickerProps & {
  value: NativeSyntheticEvent<NativeTouchEvent>;
  onValueChange: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  items: {
    key: string;
    label: string;
    value: string;
  }[];
  error: string | undefined;
  theme: Theme;
  placeholder: string;
  label: string;
};

const Picker = ({ value, onValueChange, onBlur, items, error, placeholder, theme, ...props }: Props) => {
  return (
    <>
      <NativePicker
        style={[
          styles.main,
          {
            backgroundColor: theme.colors.inputs.background,
            color: theme.colors.inputs.text,
            borderColor: error ? "red" : "transparent",
            borderWidth: error ? 3 : 0,
          },
        ]}
        selectedValue={value}
        onValueChange={onValueChange}
        onBlur={onBlur}
        {...props}>
        <NativePicker.Item
          key={"-1"}
          label={placeholder ?? "Country"}
          value={undefined}
        />
        {items.map(({ key, label, value }) => (
          <NativePicker.Item
            key={key}
            label={label}
            value={value}
          />
        ))}
      </NativePicker>
      {error && <CS color="red">{error}</CS>}
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 50,
    backgroundColor: "transparent",
    paddingLeft: 15,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default withTheme(Picker);
