import { useContext, useMemo } from "react";
import { StyleSheet, Switch, View } from "react-native";

import { CM } from "@/components/Typography";
import { AppContext } from "@/contexts/AppContextProvider";
import withTheme from "@/hocs/withTheme";
import { DarkTheme, DefaultTheme } from "@/theme";

const SelectTheme = () => {
  const { theme, setTheme } = useContext(AppContext);
  const isDarkTheme = useMemo(() => theme === DarkTheme, [theme]);

  return (
    <View style={[styles.themeContainer]}>
      <CM style={{ color: theme.colors.txt.dark }}>Dark Theme?</CM>
      <Switch
        style={{ marginLeft: 20 }}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(val) => {
          setTheme && setTheme(val ? DarkTheme : DefaultTheme);
        }}
        value={isDarkTheme}
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
