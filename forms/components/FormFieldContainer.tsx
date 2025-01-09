import { StyleSheet, View } from "react-native";

import { CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = {
  children: React.ReactNode;
  error?: string;
  theme: Theme;
};

const FormFieldContainer = ({ children, error, theme }: Props) => {
  return (
    <View>
      <View
        style={
          (styles.container,
          {
            borderColor: Boolean(error) ? theme.colors.error.border : "transparent",
            borderRadius: Boolean(error) ? 5 : 0,
          })
        }>
        {children}
      </View>
      {error && <CS style={{ color: theme.colors.error.text }}>{error}</CS>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "transparent",
  },
});

export default withTheme(FormFieldContainer);
