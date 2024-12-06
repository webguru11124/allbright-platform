import { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Placeholder from "@/components/Placeholder";
import { H3 } from "@/components/Typography";
import { UserContext } from "@/contexts/UserContext";
import BusinessCard from "@/features/BusinessCard";
import AccountProfileForm from "@/forms/AccountProfileForm";
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
          <View style={styles.article}>
            <H3>{user?.name}</H3>
            <AccountProfileForm />
          </View>
          <View style={styles.aside}>
            <View style={styles.businessCardContainer}>
              <BusinessCard member={user as UserModel} />
            </View>
            <Placeholder placeholderText="Sidebar" />
          </View>
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
  },
  main: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  article: {},
  aside: {
    width: 300,
    marginLeft: 20,
  },
  businessCardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default withTheme(Profile);
