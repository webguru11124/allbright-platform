import { forwardRef } from "react";
import { TextInputProps, TextStyle, View } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";

import { CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = TextInputProps & {
  label?: string;
  error?: string | undefined;
  theme: Theme;
};

const TextInput = forwardRef(({ theme, error, onBlur, onChangeText, placeholder, label, ...rest }: Props, ref) => {
  return (
    <View style={{ minHeight: rest.multiline ? 200 : 50 }}>
      <FloatingLabelInput
        ref={ref as any}
        label={label || placeholder || "Please enter"}
        autoCapitalize="none"
        inputStyles={
          {
            backgroundColor: theme.colors.inputs.background,
            outline: "none",
            minHeight: 50,
            fontSize: 16,
            color: theme.colors.inputs.text,
          } as TextStyle
        }
        containerStyles={{
          backgroundColor: theme.colors.inputs.background,
          paddingHorizontal: 15,
          borderRadius: 5,
          borderColor: Boolean(error) ? theme.colors.error.border : "transparent",
          borderWidth: Boolean(error) ? 3 : 0,
          paddingTop: rest.multiline ? 35 : 0,
          minHeight: rest.multiline ? 100 : 50,
        }}
        animationDuration={150}
        onChangeText={onChangeText}
        customLabelStyles={{ topBlurred: rest.multiline ? -90 : undefined }}
        labelStyles={{ paddingTop: 0 }}
        onBlur={onBlur}
        {...rest}
      />
      {error && <CS style={{ color: theme.colors.error.text }}>{error}</CS>}
    </View>
  );
});
TextInput.displayName = "TextInput";

export default withTheme(TextInput);
