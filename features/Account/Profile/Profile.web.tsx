import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import ColourSquares from "@/components/ColourSquares";
import Column from "@/components/Column";
import Space from "@/components/Space";
import { CS } from "@/components/Typography";
import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import BusinessCard from "@/features/BusinessCard";
import {
  AccountProfileFormBio,
  AccountProfileFormButton,
  AccountProfileFormPersonal,
  AccountProfileFormPhoto,
  AccountProfileFormSocialMedia,
} from "@/forms/AccountProfileForm/AccountProfileForm";
import { FormProps } from "@/forms/types/forms.types";
import withTheme from "@/hocs/withTheme";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";
import { UserModel } from "@/types/user";

type Props = {
  theme: Theme;
  user: Partial<UserModel> | undefined;
  formProps: FormProps;
};

const Profile = ({ theme, user, formProps }: Props) => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const showAsSingleColumn = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  return showAsSingleColumn ? (
    <ProfileTablet
      theme={theme}
      user={user}
      formProps={formProps}
    />
  ) : (
    <ProfileDesktop
      theme={theme}
      user={user}
      formProps={formProps}
    />
  );
};

const ProfileDesktop = ({ theme, user, formProps }: Props) => (
  <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={[styles.main]}>
        <View style={[styles.article]}>
          <AccountProfileFormPhoto {...formProps} />
          <View style={styles.profileAppearanceContainer}>
            <Column style={{ width: "50%", alignItems: "flex-start" }}>
              <CS style={{ textDecorationLine: "underline" }}>View Profile Appearance</CS>
            </Column>
            <Column style={{ width: "50%", alignItems: "flex-end" }}>
              <AccountProfileFormButton
                style={{ width: 250 }}
                {...formProps}
              />
            </Column>
          </View>
          <Space height={20} />
          <AccountProfileFormPersonal {...formProps} />
        </View>
        <View style={[styles.aside]}>
          <View style={styles.businessCardContainer}>
            <BusinessCard member={{ ...user, businessCardColour: formProps.inputs.businessCardColour } as UserModel} />
            <ColourSquares
              style={{ marginTop: 20 }}
              setValue={(val) => formProps.changeTextFuncs.businessCardColour(val)}
            />
            <View style={styles.inputsContainer}>
              <Space height={10} />
              <AccountProfileFormBio {...formProps} />
              <Space height={10} />
              <AccountProfileFormSocialMedia {...formProps} />
              <Space height={10} />
              <AccountProfileFormButton {...formProps} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
);

const ProfileTablet = ({ theme, user, formProps }: Props) => (
  <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={[styles.main, { flexDirection: "column" }]}>
        <View style={[styles.article, { width: "100%" }]}>
          <View style={styles.businessCardContainer}>
            <BusinessCard member={{ ...user, businessCardColour: formProps.inputs.businessCardColour } as UserModel} />
            <ColourSquares
              style={{ marginTop: 20 }}
              setValue={(val) => formProps.changeTextFuncs.businessCardColour(val)}
            />
            <Space height={20} />
          </View>
          <AccountProfileFormPhoto {...formProps} />
          <Space height={20} />
          <View style={styles.profileAppearanceContainer}>
            <Column style={{ width: "50%", alignItems: "flex-start" }}>
              <CS style={{ textDecorationLine: "underline" }}>View Profile Appearance</CS>
            </Column>
          </View>
          <Space height={20} />
          <AccountProfileFormPersonal {...formProps} />
        </View>
        <View style={[styles.aside, { width: "100%" }]}>
          <View style={styles.inputsContainer}>
            <Space height={10} />
            <AccountProfileFormBio {...formProps} />
            <Space height={10} />
            <AccountProfileFormSocialMedia {...formProps} />
            <Space height={10} />
            <AccountProfileFormButton {...formProps} />
          </View>
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
  profileAppearanceContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default withTheme(Profile);
