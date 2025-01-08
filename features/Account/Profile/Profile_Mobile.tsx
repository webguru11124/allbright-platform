import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

import ColourSquares from "@/components/ColourSquares";
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

const ProfileMobile = ({ theme, user, formProps }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <MemberCardModal
          user={user}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <View style={styles.main}>
          <View style={styles.businessCardContainer}>
            <BusinessCard
              member={{ ...user, businessCardColour: formProps.inputs.businessCardColour } as UserModel}
              canViewQrCode={true}
            />
            <ColourSquares
              style={{ marginTop: 20 }}
              setValue={(val) => formProps.changeTextFuncs.businessCardColour(val)}
            />
            <Pressable
              style={[styles.viewProfileContainer]}
              onPress={() => setShowModal(true)}>
              <CS style={{ textDecorationLine: "underline" }}>View Profile Appearance</CS>
            </Pressable>
          </View>
          <View style={styles.inputsContainer}>
            <Space height={10} />
            <AccountProfileFormPhoto {...formProps} />
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
  viewProfileContainer: {
    marginTop: 20,
  },
  inputsContainer: {
    marginBottom: 20,
    gap: 10,
    width: "100%",
  },
});

export default ProfileMobile;
