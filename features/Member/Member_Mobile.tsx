import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

import BackButton from "@/components/BackButton";
import MemberCardMobile from "@/features/Member/components/MemberCard_Mobile";
import useMemberCard from "@/features/Member/hooks/useMemberCard";
import { UserModel } from "@/types/user";

type Props = {
  user: UserModel;
  theme: Theme;
};

const MemberMobile = ({ theme, user }: Props) => {
  const { name, firstName, lastName, imageSrc, occupation, location, bioFields, lightBackground } = useMemberCard({
    theme: theme,
    user: user,
  });

  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <ScrollView style={[styles.main]}>
        <BackButton onPress={() => router.back()} />
        <MemberCardMobile
          lightBackground={lightBackground}
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
    alignItems: "center",
    width: "100%",
  },
  main: {
    padding: 20,
  },
});

export default MemberMobile;
