import { ScrollView, StyleSheet, View } from "react-native";

import SelectTheme from "@/components/SelectTheme";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

const SettingsDesktop = ({ theme }: Props) => {
  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <SelectTheme />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
  },
  scroll: {
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1,
  },
  themeContainer: {
    flexDirection: "row",
    margin: 20,
  },
});

export default withTheme(SettingsDesktop);
