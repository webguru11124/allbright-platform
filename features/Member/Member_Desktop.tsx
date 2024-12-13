import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

import BackButton from "@/components/BackButton";
import MemberCardDesktop from "@/features/Member/components/MemberCard_Desktop";
import { BioField } from "@/features/Member/types";

type Props = {
  lightBackground: string;
  id?: string;
  name?: string;
  imageSrc?: string | undefined | null;
  firstName?: string;
  lastName?: string;
  occupation: string;
  location: string;
  bioFields: BioField[];
  theme: Theme;
};

const MemberDesktop = ({
  lightBackground,
  id,
  name,
  theme,
  imageSrc,
  firstName,
  lastName,
  occupation,
  location,
  bioFields,
}: Props) => (
  <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
    <ScrollView style={[styles.main]}>
      <BackButton onPress={() => router.back()} />
      <MemberCardDesktop
        lightBackground={lightBackground}
        id={id}
        name={name}
        firstName={firstName}
        lastName={lastName}
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
