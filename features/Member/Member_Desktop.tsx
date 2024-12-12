import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";

import BackButton from "@/components/BackButton";
import Column from "@/components/Column";
import ImageOrInitials from "@/components/ImageOrInitials";
import { H4 } from "@/components/Typography";
import { UserModel } from "@/types/user";

type Props = {
  user: UserModel;
  theme: Theme;
};

const MemberDesktop = ({ theme, user }: Props) => {
  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <ScrollView style={[styles.main]}>
        <BackButton />
        <View style={[styles.card, { backgroundColor: theme.colors.lightBackground }]}>
          <Column style={[{ width: "45%" }]}>
            <H4>{user?.name}</H4>
            <View style={styles.imageOrInitialsContainer}>
              <ImageOrInitials
                theme={theme}
                imageSrc={user?.imageSrc}
                initials={(user?.firstName?.slice(0, 1) || "A") + (user?.lastName?.slice(0, 1) || "B")}
                height={150}
                width={150}
              />
            </View>
          </Column>
          <Column style={[{ width: "55%" }]}>
            <ImageBackground
              source={require("../../assets/images/allbright-a.png")}
              style={styles.imageBackground}></ImageBackground>
          </Column>
        </View>
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
  card: {
    flexDirection: "row",
    marginTop: 40,
    padding: 40,
    borderRadius: 5,
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  imageOrInitialsContainer: {
    marginVertical: 20,
  },
  imageBackground: {
    marginRight: 50,
  },
});

export default MemberDesktop;
