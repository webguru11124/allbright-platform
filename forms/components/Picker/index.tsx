import {
  Picker as NativePicker,
  PickerProps,
} from "@react-native-picker/picker";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Pressable,
  StyleSheet,
  TextInputProps,
  TextStyle,
} from "react-native";

import { CS } from "@/components/Typography";
import TextInput from "@/forms/components/TextInput";
import withTheme from "@/hocs/withTheme";

type Props = Omit<PickerProps, "selectedValue"> & {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  placeholder: string;
  onValueChange: (itemValue: unknown, itemIndex: number) => void;
  onBlur: SyntheticEvent;
  items: {
    key: string;
    label: string;
    value: string;
  }[];
  error: string | undefined;
  theme: Theme;
};

const Picker = ({
  selectedValue,
  placeholder,
  onValueChange,
  onBlur,
  items,
  error,
  theme,
  ...props
}: Props) => {
  const style = styles({ backgroundColor: theme.colors.inputs.background });
  return (
    <>
      <NativePicker
        {...style.picker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        // error={error}
        onBlur={onBlur}
        {...props}>
        <NativePicker.Item
          key={"-1"}
          label={placeholder}
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

type PickerInputProps = TextInputProps & {
  input: string | undefined;
  displayValue: string | undefined;
  error: string | undefined;
  placeholder: string;
  theme: Theme;
  onFocus: SyntheticEvent;
  onPress: SyntheticEvent;
};

export const PickerInput = withTheme(
  ({
    input,
    displayValue,
    error,
    theme,
    onFocus,
    placeholder,
    onPress,
    ...props
  }: PickerInputProps) => {
    {
      const style = styles({
        backgroundColor: theme.colors.inputs.background,
        color: theme.colors.text,
      });

      return Boolean(input) === false || input === "undefined" ? (
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#ddd"}
          textContentType="countryName"
          value={input !== "undefined" ? input : undefined}
          error={error}
          onFocus={onFocus}
          onPress={onPress}
          onChangeText={() => {}}
          showSoftInputOnFocus={false}
          {...props}
        />
      ) : (
        <Pressable onPress={onPress}>
          <CS {...style.cs}>{displayValue}</CS>
        </Pressable>
      );
    }
  }
);

const styles = (p: TextStyle) =>
  StyleSheet.create({
    picker: {
      height: "100%",
      width: "100%",
    },
    cs: {
      height: 50,
      backgroundColor: p.backgroundColor,
    },
  });

export default withTheme(Picker);
