import { StyleSheet, View } from "react-native";

import { UserModel } from "@/types/user";

type Props = {
  user: UserModel;
  theme: Theme;
};

const MemberMobile = ({ theme, user }: Props) => {
  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.main]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  main: {},
});

export default MemberMobile;
