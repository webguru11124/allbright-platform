import {
  Picker as NativePicker,
  PickerProps,
} from "@react-native-picker/picker";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Pressable,
  TextInputProps,
} from "react-native";
import styled from "styled-components/native";

import { CS } from "@/components/Typography";
import TextInput from "@/forms/components/TextInput";
import withTheme from "@/hocs/withTheme";
import { recommendationColour } from "@/theme";

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

type StyleProps = {
  backgroundcolor: string;
  error: string | undefined;
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
  return (
    <>
      <StyledPicker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        backgroundcolor={theme.colors.inputs.background}
        error={error}
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
      </StyledPicker>
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
          <StyledCS backgroundColour={theme.colors.inputs.background}>
            {displayValue}
          </StyledCS>
        </Pressable>
      );
    }
  }
);

const StyledPicker = styled(NativePicker)<StyleProps>`
  background-color: white;
  height: 100%;
  width: 100%;
`;

const StyledCS = styled(CS)`
  height: 50px;
  background-color: ${(p) => p.backgroundColour};
  padding-left: 15px;
  padding-top: 15px;
  border-radius: 5px;
  font-size: 16px;
  color: ${recommendationColour.textColor};
`;

export default withTheme(Picker);
