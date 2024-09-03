import { TextInputProps, TextStyle } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";

import { CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = TextInputProps & { error: string | undefined; theme: Theme };

const TextInput = ({
  theme,
  error,
  onBlur,
  onChangeText,
  placeholder,
  ...rest
}: Props) => {
  return (
    <>
      <FloatingLabelInput
        {...rest}
        label={placeholder || "Please enter"}
        inputStyles={{ outline: "none", fontSize: 16 } as TextStyle}
        containerStyles={{
          height: 50,
          backgroundColor: theme.colors.inputs.background,
          paddingLeft: 15,
          borderRadius: 5,
          borderColor: Boolean(error) ? "red" : "transparent",
          borderWidth: Boolean(error) ? 3 : 0,
        }}
        animationDuration={150}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      {error && <CS color="red">{error}</CS>}
    </>
  );
};

export default withTheme(TextInput);
