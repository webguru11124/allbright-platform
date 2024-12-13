import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

import BackButton from "@/components/BackButton";
import MemberCardDesktop from "@/features/Member/components/MemberCard_Desktop";
import useMemberCard from "@/features/Member/hooks/useMemberCard";
import { UserModel } from "@/types/user";

type Props = {
  user: UserModel;
  theme: Theme;
};

const MemberDesktop = ({ theme, user }: Props) => {
  const { id, name, firstName, lastName, imageSrc, occupation, location, bioFields, lightBackground } = useMemberCard({
    theme: theme,
    user: user,
  });

  return (
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
};

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
