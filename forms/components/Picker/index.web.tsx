import {
  Picker as NativePicker,
  PickerProps,
} from "@react-native-picker/picker";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import styled from "styled-components/native";

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

type StyleProps = {
  backgroundcolor: string;
  color: string;
  error: string | undefined;
};

const Picker = ({
  value,
  onValueChange,
  onBlur,
  items,
  error,
  placeholder,
  theme,
  ...props
}: Props) => {
  return (
    <>
      <StyledPicker
        selectedValue={value}
        onValueChange={onValueChange}
        color={theme.colors.text}
        backgroundcolor={theme.colors.inputs.background}
        error={error}
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
      </StyledPicker>
      {error && <CS color="red">{error}</CS>}
    </>
  );
};

const StyledPicker = styled(NativePicker)<StyleProps>`
  height: 50px;
  background-color: ${(p) => p.backgroundcolor};
  padding-left: 15px;
  border-radius: 5px;
  border-color: ${(p) => (p.error ? "red" : "tranparent")};
  border-width: ${(p) => (p.error ? 3 : 0)}px;
  font-size: 16px;
  color: ${(p) => p.color};
`;

export default withTheme(Picker);
