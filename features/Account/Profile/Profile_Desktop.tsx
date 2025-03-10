import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

import ColourSquares from "@/components/ColourSquares";
import Column from "@/components/Column";
import Space from "@/components/Space";
import { CS } from "@/components/Typography";
import BusinessCard from "@/features/BusinessCard";
import MemberCardModal from "@/features/Member/components/MemberCardModal";
import {
  AccountProfileFormBio,
  AccountProfileFormButton,
  AccountProfileFormPersonal,
  AccountProfileFormPhoto,
  AccountProfileFormSocialMedia,
} from "@/forms/AccountProfileForm/AccountProfileForm";
import { FormProps } from "@/forms/types/forms.types";
import { UserModel } from "@/types/user";

type Props = {
  theme: Theme;
  user: Partial<UserModel> | undefined;
  formProps: FormProps;
};

const ProfileDesktop = ({ theme, user, formProps }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <MemberCardModal
        showModal={showModal}
        setShowModal={setShowModal}
        user={user}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={[styles.main]}>
          <View style={[styles.article]}>
            <AccountProfileFormPhoto {...formProps} />
            <View style={styles.profileAppearanceContainer}>
              <Column style={{ width: "50%", alignItems: "flex-start" }}>
                <Pressable onPress={() => setShowModal(true)}>
                  <CS style={{ color: theme.colors.txt.secondary, textDecorationLine: "underline" }}>
                    View Profile Appearance
                  </CS>
                </Pressable>
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
              <BusinessCard
                member={{ ...user, businessCardColour: formProps.inputs.businessCardColour } as UserModel}
                canViewQrCode={true}
              />
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
  profileAppearanceContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProfileDesktop;
