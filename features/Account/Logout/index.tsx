import { useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { CS } from "@/components/Typography";
import { useUserContext } from "@/contexts/UserContext";
import Button from "@/forms/components/Button";
import withTheme from "@/hocs/withTheme";
import { signOut } from "@/utils/client/FirebaseAuthClient";

type Props = { theme: Theme };

const Logout = ({ theme }: Props) => {
  const queryClient = useQueryClient();
  const { refetch } = useUserContext();
  const onPress = async () => {
    signOut();
    queryClient.clear();
    refetch();
    router.navigate("/");
  };

  return (
    <View style={[styles.root]}>
      <View style={[styles.textContainer]}>
        <CS style={{ color: theme.colors.txt.dark }}>Are you sure you would like to logout?</CS>
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

export default withTheme(Logout);
