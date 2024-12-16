import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

import BackButton from "@/components/BackButton";
import MemberCardMobile from "@/features/Member/components/MemberCard_Mobile";
import { MemberCardProps } from "@/features/Member/types";

const MemberMobile = ({
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
      <MemberCardMobile
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
    alignItems: "center",
    width: "100%",
  },
  main: {
    padding: 20,
  },
});

export default MemberMobile;
