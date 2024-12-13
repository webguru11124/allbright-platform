import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { Pressable, StyleSheet, View } from "react-native";

import { CL } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
  onPress: GestureEvent;
  backText?: string;
};

const BackButton = ({ theme, backText, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.navigateBack]}>
      <View style={[styles.backButton]}>
        <MaterialIcons
          size={28}
          name="arrow-circle-left"
          color={theme.colors.inputs.placeholder}
        />
        <CL style={[styles.cl]}>{backText || "Back"}</CL>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  navigateBack: {
    alignItems: "flex-start",
    cursor: "pointer",
    display: "flex",
    maxWidth: 1000,
  },
  backButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 50,
    marginRight: 20,
    padding: 5,
  },
  cl: {
    marginLeft: 10,
  },
});

export default withTheme(BackButton);
