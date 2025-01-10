import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import IconAllBright from "@/components/IconAllbright";
import { H6 } from "@/components/Typography";
import { Metrics } from "@/constants/Metrics";
import TabButton from "@/features/Navbar/partials/TabButton";
import TabImage from "@/features/Navbar/partials/TabImage";
import withTheme from "@/hocs/withTheme";
import { UserModel } from "@/types/user";

type Props = {
  user: Partial<UserModel> | undefined;
  theme: Theme;
};

const NavigationBar = ({ user, theme }: Props) => (
  <View style={[styles.navigationBarContainer, { backgroundColor: theme.colors.navbarBackground }]}>
    <View style={[styles.tabContainer]}>
      <View style={[styles.tabImageContainer]}>
        <IconAllBright
          width={183}
          color={theme.colors.txt.dark}
        />
      </View>
      <TabButton href="/home">
        <H6 style={{ fontWeight: "700", color: theme.colors.txt.dark }}>Home</H6>
      </TabButton>
      <TabButton href="/connect">
        <H6 style={{ fontWeight: "700", color: theme.colors.txt.dark }}>Connect</H6>
      </TabButton>
      <TabButton href="/learning">
        <H6 style={{ fontWeight: "700", color: theme.colors.txt.dark }}>Learning</H6>
      </TabButton>
      <TabButton href="/events">
        <H6 style={{ fontWeight: "700", color: theme.colors.txt.dark }}>Events</H6>
      </TabButton>
      <TabButton href="/groups">
        <H6 style={{ fontWeight: "700", color: theme.colors.txt.dark }}>Groups</H6>
      </TabButton>
      <TabButton href="/edit">
        <H6 style={{ fontWeight: "700", color: theme.colors.txt.dark }}>The Allbright Post</H6>
      </TabButton>
    </View>
    <View style={[styles.tabImageContainer]}>
      <Pressable
        onPress={() => {
          router.navigate("/settings");
        }}
        style={[styles.settingsIconContainer, { backgroundColor: theme.colors.inputs.border }]}>
        <MaterialIcons
          name="settings"
          size={24}
          color={theme.colors.txt.light + "90"}
        />
      </Pressable>
      <TabImage
        imageSrc={user?.imageSrc}
        initials={(user?.firstName?.slice(0, 1) || "A") + (user?.lastName?.slice(0, 1) || "B")}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  navigationBarContainer: {
    height: Metrics.navbar.height,
    width: "100%",
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabContainer: {
    height: "100%",
    flexDirection: "row",
  },
  tabImageContainer: {
    height: "100%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    marginRight: 50,
  },
  settingsIconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 50,
  },
});

export default withTheme(NavigationBar);
