import { Picker as NativePicker } from "@react-native-picker/picker";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  TargetedEvent,
} from "react-native";
import styled from "styled-components/native";

import { CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = {
  selectedValue: NativeSyntheticEvent<NativeTouchEvent>;
  onValueChange: (itemValue: unknown, itemIndex: number) => void;
  onBlur: (e: NativeSyntheticEvent<TargetedEvent>) => void;
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
  onValueChange,
  onBlur,
  items,
  error,
  theme,
}: Props) => {
  return (
    <>
      <StyledPicker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        backgroundcolor={theme.colors.inputs.background}
        error={error}
        onBlur={onBlur}>
        <NativePicker.Item key={"-1"} label={"Country"} value={undefined} />
        {items.map(({ key, label, value }) => (
          <NativePicker.Item key={key} label={label} value={value} />
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
  border-width: ${(p) => (p.error ? 3 : 0)};
  font-size: 14px;
  color: rgb(73, 101, 140);
`;

export default withTheme(Picker);
