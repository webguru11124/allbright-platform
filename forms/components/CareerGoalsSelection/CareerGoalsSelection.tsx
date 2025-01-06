import React from "react";
import { StyleSheet, View } from "react-native";

import { CM } from "@/components/Typography";
import FormFieldContainer from "@/forms/components/FormFieldContainer";
import PillInput from "@/forms/components/PillInput";
import allCareerGoals, { CareerGoalType } from "@/utils/data/careerGoals";

interface Props {
  onSelectedHandler: (careerGoal: CareerGoalType) => void;
  goalIsSelected: (careerGoal: CareerGoalType) => boolean;
  error?: string;
}
const CareerGoalsSelection = ({ error, onSelectedHandler, goalIsSelected }: Props) => {
  return (
    <>
      <CM>Please choose 3 - 6</CM>
      <FormFieldContainer error={error}>
        <View style={styles.goalsContainer}>
          {allCareerGoals.map((careerGoal) => (
            <PillInput
              key={careerGoal.id}
              name={careerGoal.title}
              labelText={careerGoal.title}
              onChange={() => onSelectedHandler({ ...careerGoal })}
              isChecked={goalIsSelected(careerGoal)}
              isSquare
            />
          ))}
        </View>
      </FormFieldContainer>
    </>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
});

export default CareerGoalsSelection;
