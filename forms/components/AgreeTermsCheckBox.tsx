import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Linking, TextInputProps } from "react-native";
import styled from "styled-components/native";

import { CS } from "@/components/Typography";
import { Links } from "@/constants/Links";
import withTheme from "@/hocs/withTheme";
import { useEffect } from "react";

type Props = Omit<TextInputProps, "onBlur"> & {
  onChangeText: (value: string | boolean) => void;
  placeholder: string | React.FC;
  error: string | undefined;
  onBlur: Function;
  theme: Theme;
};

const CheckBox = ({
  theme,
  onChangeText,
  placeholder,
  onBlur,
  error,
  value,
}: Props) => {
  useEffect(() => console.log("value", value), [value]);

  const onPress = () => {
    onChangeText(!value);
  };

  return (
    <>
      <TickContainer onPress={onPress}>
        <TickWrapper error={error}>
          {value && <MaterialIcons name={"check"} size={24} color={"black"} />}
        </TickWrapper>
        <CS>
          I agree to the AllBright{" "}
          <Link onPress={() => Linking.openURL(Links.terms)}>Terms of Use</Link>
        </CS>
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

const Link = styled(CS)`
  text-decoration: underline;
`;

export default withTheme(CheckBox);
