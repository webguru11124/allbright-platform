import { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { H3 } from "@/components/Typography";
import { UserContext } from "@/contexts/UserContext";
import BusinessCard from "@/features/BusinessCard";
import PublicProfileForm from "@/forms/PublicProfileForm";
import withTheme from "@/hocs/withTheme";
import { UserModel } from "@/types/user";

type Props = {
  theme: Theme;
};

const Profile = ({ theme }: Props) => {
  const { user } = useContext<{
    user: Partial<UserModel> | undefined;
    refetch: Function;
  }>(UserContext);
  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.main}>
          <View style={styles.businessCardContainer}>
            <BusinessCard member={user as UserModel} />
          </View>
          <H3>{user?.name}</H3>
          <PublicProfileForm />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  scroll: {
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  main: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  businessCardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});

export default withTheme(Profile);
