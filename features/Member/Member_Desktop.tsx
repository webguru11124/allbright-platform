import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

import BackButton from "@/components/BackButton";
import MemberCardDesktop from "@/features/Member/components/MemberCard_Desktop";
import { MemberCardProps } from "@/features/Member/types";

const MemberDesktop = ({
  lightBackground,
  id,
  name,
  theme,
  imageSrc,
  initials,
  occupation,
  location,
  bioFields,
}: MemberCardProps) => (
  <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
    <ScrollView style={[styles.main]}>
      <BackButton onPress={() => router.back()} />
      <MemberCardDesktop
        lightBackground={lightBackground}
        id={id}
        name={name}
        initials={initials}
        imageSrc={imageSrc}
        occupation={occupation}
        location={location}
        bioFields={bioFields}
        theme={theme}
      />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  main: {
    width: 1000,
    padding: 20,
  },
});

export default MemberDesktop;
