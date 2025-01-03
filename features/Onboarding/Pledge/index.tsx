import React from "react";
import { StyleSheet, View } from "react-native";

import { CS, CXL, H4 } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import PledgeForm from "@/forms/PledgeForm";
import pledge from "@/utils/data/pledge";

const Pledge = () => {
  return (
    <OnboadingPageLayout>
      <H4>Welcome to AllBright, </H4>
      <CS style={{ fontWeight: 700 }}>Our pledge</CS>
      <View style={styles.list}>
        {pledge.map((item) => (
          <View
            style={styles.listItem}
            key={item}>
            <CXL style={{ fontWeight: 400 }}>{item}</CXL>
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

export default Pledge;
