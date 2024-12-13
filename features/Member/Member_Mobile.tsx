import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

import BackButton from "@/components/BackButton";
import MemberCardMobile from "@/features/Member/components/MemberCard_Mobile";
import { UserModel } from "@/types/user";

type Props = {
  user: UserModel;
  theme: Theme;
};

const MemberMobile = ({ theme, user }: Props) => {
  const jobTitle = user?.jobTitle || "";
  const jobCompany = user?.jobCompany || "";
  const occupation = [jobTitle, jobCompany].filter((a) => a).join(" • ");

  const city = user?.city;
  const country = user?.country;
  const location = [city, country].filter((a) => a).join(", ");

  // @ts-ignore
  const interests = user?.interests?.join(" . ");
  const seeking = user?.goals?.join(" • ");

  const bioFields = [
    { title: "About Me", info: user?.bio, isLink: false },
    { title: "Interests", info: interests, isLink: false },
    { title: "Seeking", info: seeking, isLink: false },
    { title: "Job Level", info: user?.jobLevel, isLink: false },
    { title: "Industry", info: user?.jobIndustry, isLink: false },
    {
      title: "Instagram",
      info: user?.instagram,
      isLink: true,
    },
    {
      title: "Website",
      info: user?.website?.toLowerCase(),
      isLink: true,
    },
    {
      title: "LinkedIn",
      info: user?.linkedin?.toLowerCase(),
      isLink: true,
    },
  ];

  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <ScrollView style={[styles.main]}>
        <BackButton onPress={() => router.back()} />
        <MemberCardMobile
          lightBackground={theme.colors.lightBackground}
          name={user?.name}
          firstName={user?.firstName}
          lastName={user?.lastName}
          imageSrc={user?.imageSrc}
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
