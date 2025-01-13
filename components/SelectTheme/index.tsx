import { useContext } from "react";
import { StyleSheet, Switch, View } from "react-native";

import { CM } from "@/components/Typography";
import { AppContext } from "@/contexts/AppContextProvider";
import withTheme from "@/hocs/withTheme";
import { DarkTheme, DefaultTheme } from "@/theme";

const SelectTheme = () => {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <View style={[styles.themeContainer]}>
      <CM style={{ color: theme.colors.txt.dark }}>Dark Theme</CM>
      <Switch
        style={{ marginLeft: 20 }}
        trackColor={{ false: theme.colors.inputs.border, true: theme.colors.inputs.background }}
        thumbColor={theme.dark ? theme.colors.pill : theme.colors.inactive}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(val) => {
          setTheme && setTheme(val ? DarkTheme : DefaultTheme);
        }}
        value={theme.dark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  themeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 20,
    padding: 20,
  },
});

export default withTheme(SelectTheme);
