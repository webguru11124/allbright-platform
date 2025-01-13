import React from "react";
import { StyleSheet, View } from "react-native";

import { CS, CXL, H4 } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import PledgeForm from "@/forms/PledgeForm";
import withTheme from "@/hocs/withTheme";
import pledge from "@/utils/data/pledge";

type Props = {
  theme: Theme;
};

const Pledge = ({ theme }: Props) => {
  return (
    <OnboadingPageLayout>
      <H4 style={{ color: theme.colors.txt.dark }}>Welcome to AllBright, </H4>
      <CS style={{ color: theme.colors.txt.dark, fontWeight: 700 }}>Our pledge</CS>
      <View style={styles.list}>
        {pledge.map((item) => (
          <View
            style={styles.listItem}
            key={item}>
            <CXL style={{ color: theme.colors.txt.dark, fontWeight: 400 }}>{item}</CXL>
          </View>
        ))}
      </View>
      <PledgeForm />
    </OnboadingPageLayout>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 30,
    marginVertical: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});

export default withTheme(Pledge);
