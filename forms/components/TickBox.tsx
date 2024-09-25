import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";

import { CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = Omit<TextInputProps, "onBlur" | "value" | "onChange"> & {
  onChange: (value: string | boolean) => void;
  error?: string | undefined;
  theme: Theme;
  label: string;
  value: boolean;
};

const TickBox = ({ theme, onChange, error, value, label, testID }: Props) => {
  const onPress = () => {
    onChange(!value);
  };

  return (
    <>
      <TickContainer
        testID={testID}
        onPress={onPress}>
        <TickWrapper error={error}>
          {value && (
            <MaterialIcons
              name={"check"}
              size={24}
              color={"black"}
            />
          )}
        </TickWrapper>
        <CS>{label}</CS>
      </TickContainer>
      {error && <CS color="red">{error}</CS>}
    </>
  );
};

const TickContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;

const TickWrapper = styled.View<{ error: string | undefined }>`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background: #fff;
  border-color: ${(p) => (Boolean(p.error) ? "red" : "transparent")};
  border-width: ${(p) => (Boolean(p.error) ? 3 : 0)}px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default withTheme(TickBox);
