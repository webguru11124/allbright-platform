import React, { FunctionComponent, useContext } from "react";
import { StyleSheet, View } from "react-native";

import { CM, H3 } from "@/components/Typography";
import { UserContext } from "@/contexts/UserContext";
import BusinessCard from "@/features/BusinessCard";
import { useApprove } from "@/features/Onboarding/Complete/hooks/useApprove";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import Button from "@/forms/components/Button";
import withTheme from "@/hocs/withTheme";
import { UserModel } from "@/types/user";

type Props = {
  theme: Theme;
};

const Complete: FunctionComponent<Props> = ({ theme }) => {
  const { onClick } = useApprove();
  const { user } = useContext(UserContext);

  return (
    <OnboadingPageLayout>
      <H3 style={{ color: theme.colors.txt.dark }}>Profile complete</H3>
      <CM style={{ color: theme.colors.txt.dark }}>
        Here is your AllBright Business Card. Please check everything looks right, and we’ll get you onto the platform
        immediately. You can change your details at any time through the Profile option at the top right of your screen.
      </CM>
      <View style={[styles.container]}>
        <BusinessCard member={user as UserModel} />
      </View>
      <Button onPress={onClick}>Approve</Button>
    </OnboadingPageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
  },
});

export default withTheme(Complete);
