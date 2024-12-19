import { useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { CS } from "@/components/Typography";
import { useUserContext } from "@/contexts/UserContext";
import Button from "@/forms/components/Button";
import { auth } from "@/utils/client/firebase";

const Logout = () => {
  const queryClient = useQueryClient();
  const { refetch } = useUserContext();
  const onPress = async () => {
    signOut(auth);
    queryClient.clear();
    refetch();
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
    ...Platform.select({
      native: {
        paddingHorizontal: "20%",
      },
      default: {
        paddingHorizontal: "40%",
      },
    }),
  },
  textContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
});

export default Logout;
