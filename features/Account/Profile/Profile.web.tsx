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

const Profile = ({ theme, user, formProps }: Props) => {
  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.main}>
          <View style={styles.article}>
            <H3>{user?.name}</H3>
            <AccountProfileFormPersonal {...formProps} />
          </View>
          <View style={styles.aside}>
            <View style={styles.businessCardContainer}>
              <BusinessCard
                member={{ ...user, businessCardColour: formProps.inputs.businessCardColour } as UserModel}
              />
              <ColourSquares
                style={{ marginTop: 20 }}
                setValue={(val) => formProps.changeTextFuncs.businessCardColour(val)}
              />
              <View style={styles.inputsContainer}>
                <Space height={10} />
                <AccountProfileFormButton {...formProps} />
                <Space height={10} />
                <AccountProfileFormBio {...formProps} />
                <Space height={10} />
                <AccountProfileFormSocialMedia {...formProps} />
              </View>
            </View>
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
    marginBottom: 50,
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
  article: { width: 660 },
  aside: {
    width: 300,
    marginLeft: 20,
  },
  businessCardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  inputsContainer: {
    marginTop: 20,
    gap: 10,
    width: "100%",
  },
});

export default withTheme(Profile);
