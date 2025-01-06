import React from "react";
import { StyleSheet, View } from "react-native";

import IconAllBright from "@/components/IconAllbright";
import { H6 } from "@/components/Typography";
import { Metrics } from "@/constants/Metrics";
import TabButton from "@/features/Navbar/partials/TabButton";
import TabImage from "@/features/Navbar/partials/TabImage";
import { UserModel } from "@/types/user";

type Props = {
  user: Partial<UserModel> | undefined;
};

const NavigationBar = ({ user }: Props) => (
  <View style={[styles.navigationBarContainer]}>
    <View style={[styles.tabContainer]}>
      <View style={[styles.tabImageContainer]}>
        <IconAllBright width={183} />
      </View>
      <TabButton href="/home">
        <H6
          fontWeight={700}
          color={"#414143"}>
          Home
        </H6>
      </TabButton>
      <TabButton href="/connect">
        <H6
          fontWeight={700}
          color={"#414143"}>
          Connect
        </H6>
      </TabButton>
      <TabButton href="/learning">
        <H6
          fontWeight={700}
          color={"#414143"}>
          Learning
        </H6>
      </TabButton>
      <TabButton href="/events">
        <H6
          fontWeight={700}
          color={"#414143"}>
          Events
        </H6>
      </TabButton>
      <TabButton href="/groups">
        <H6
          fontWeight={700}
          color={"#414143"}>
          Groups
        </H6>
      </TabButton>
      <TabButton href="/edit">
        <H6
          fontWeight={700}
          color={"#414143"}>
          The Allbright Post
        </H6>
      </TabButton>
    </View>
    <View style={[styles.tabImageContainer]}>
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    marginRight: 50,
  },
});

export default NavigationBar;
