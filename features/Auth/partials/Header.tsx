import { StyleSheet, View } from "react-native";

import IconAllBright from "@/components/IconAllbright";

export default function Header() {
  return (
    <View style={[styles.headerContainer]}>
      <View style={[styles.tabContainer]}>
        <View style={[styles.tabIconContainer]}>
          <IconAllBright width={183} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 82,
    width: "100%",
    paddingHorizontal: 40,
  },
  tabContainer: {
    height: "100%",
    flexDirection: "row",
  },
  tabIconContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    marginRight: 50,
  },
});
