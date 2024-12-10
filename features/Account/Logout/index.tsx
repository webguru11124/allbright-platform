import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

import { CS } from "@/components/Typography";
import Button from "@/forms/components/Button";
import { setToken } from "@/utils/token";

const Logout = () => {
  const onPress = async () => {
    await setToken("");
    router.navigate("/");
  };

  return (
    <View style={[styles.root]}>
      <View style={[styles.textContainer]}>
        <CS>Are you sure you would like to logout?</CS>
      </View>
      <Button
        disabled={false}
        isLoading={false}
        onPress={onPress}
        testID="Account:Logout">
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "20%",
  },
  textContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
});

export default Logout;
