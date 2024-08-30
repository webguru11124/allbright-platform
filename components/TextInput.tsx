import { TextInputProps, TextStyle } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";

import withTheme from "@/hocs/withTheme";

type Props = TextInputProps & { theme: Theme };

const TextInput = ({ theme, onChange, placeholder, ...rest }: Props) => {
  return (
    <FloatingLabelInput
      {...rest}
      label={placeholder || "Please enter"}
      inputStyles={{ outline: "none", fontSize: 16 } as TextStyle}
      containerStyles={{
        height: 50,
        backgroundColor: theme.colors.inputs.background,
        paddingLeft: 15,
        borderRadius: 5,
      }}
      animationDuration={150}
      onChange={onChange}
    />
  );
};

export default withTheme(TextInput);
