import { ScrollView, StyleSheet, View } from "react-native";

import ColourSquares from "@/components/ColourSquares";
import Space from "@/components/Space";
import { H3 } from "@/components/Typography";
import BusinessCard from "@/features/BusinessCard";
import {
  AccountProfileFormBio,
  AccountProfileFormButton,
  AccountProfileFormPersonal,
  AccountProfileFormSocialMedia,
} from "@/forms/AccountProfileForm/AccountProfileForm";
import { FormProps } from "@/forms/types/forms.types";
import withTheme from "@/hocs/withTheme";
import { UserModel } from "@/types/user";

type Props = {
  theme: Theme;
  user: Partial<UserModel> | undefined;
  formProps: FormProps;
};

const Profile = ({ theme, user, formProps }: Props) => (
  <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.main}>
        <View style={styles.businessCardContainer}>
          <BusinessCard member={{ ...user, businessCardColour: formProps.inputs.businessCardColour } as UserModel} />
          <ColourSquares
            style={{ marginTop: 20 }}
            setValue={(val) => formProps.changeTextFuncs.businessCardColour(val)}
          />
        </View>
        <H3>{user?.name}</H3>
        <View style={styles.inputsContainer}>
          <Space height={10} />
          <AccountProfileFormPersonal {...formProps} />
          <Space height={10} />
          <AccountProfileFormBio {...formProps} />
          <Space height={10} />
          <AccountProfileFormSocialMedia {...formProps} />
          <Space height={10} />
          <AccountProfileFormButton {...formProps} />
          <Space height={10} />
        </View>
      </View>
    </ScrollView>
  </View>
);

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
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  main: {
    marginTop: 40,
  },
  businessCardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  inputsContainer: {
    marginVertical: 20,
    gap: 10,
    width: "100%",
  },
});

export default withTheme(Profile);
