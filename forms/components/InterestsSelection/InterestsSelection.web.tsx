import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

import { CL } from "@/components/Typography";
import FormFieldContainer from "@/forms/components/FormFieldContainer";
import PillInput from "@/forms/components/PillInput";
import { interests } from "@/utils/data/interests";

interface InterestsSelectionProps {
  interestIsSelected: (interest: (typeof interests)[number]) => boolean;
  setInterestStateHandler: (interest: (typeof interests)[number]) => void;
  error?: string;
}

const InterestsSelection: FunctionComponent<InterestsSelectionProps> = ({ error, ...props }) => {
  return (
    <View style={[styles.main]}>
      <CL>Interests* (at least 1)</CL>

      <FormFieldContainer error={error}>
        <View style={[styles.goalsContainer]}>
          {interests.map((interest: string) => (
            <PillInput
              key={interests.indexOf(interest)}
              name={interest}
              labelText={interest}
              isChecked={props.interestIsSelected(interest)}
              onChange={() => props.setInterestStateHandler(interest)}
            />
          ))}
        </View>
      </FormFieldContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
  },
  goalsContainer: {
    paddingVertical: 15,
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 8,
  },
});

export default InterestsSelection;
