import { TextInputProps, TextStyle } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";

import { CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = TextInputProps & {
  label?: string;
  error: string | undefined;
  theme: Theme;
};

const TextInput = ({
  theme,
  error,
  onBlur,
  onChangeText,
  placeholder,
  label,
  ...rest
}: Props) => {
  return (
    <>
      <FloatingLabelInput
        label={label || placeholder || "Please enter"}
        autoCapitalize="none"
        inputStyles={
          {
            outline: "none",
            minHeight: 50,
            fontSize: 16,
            color: theme.colors.text,
          } as TextStyle
        }
        containerStyles={{
          backgroundColor: theme.colors.inputs.background,
          paddingLeft: 15,
          borderRadius: 5,
          borderColor: Boolean(error) ? "red" : "transparent",
          borderWidth: Boolean(error) ? 3 : 0,
          paddingTop: rest.multiline ? 35 : 0,
        }}
        animationDuration={150}
        onChangeText={onChangeText}
        customLabelStyles={{ topBlurred: rest.multiline ? -90 : undefined }}
        labelStyles={{ paddingTop: 0 }}
        onBlur={onBlur}
        {...rest}
      />
      {error && <CS color="red">{error}</CS>}
    </>
  );
};

export default withTheme(TextInput);
