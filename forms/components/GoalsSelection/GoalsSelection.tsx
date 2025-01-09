import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

import { CL } from "@/components/Typography";
import FormFieldContainer from "@/forms/components/FormFieldContainer";
import TickBox from "@/forms/components/TickBox";
import withTheme from "@/hocs/withTheme";
import goals from "@/utils/data/goals";

interface GoalsSectionProps {
  goalIsSelected: (goal: (typeof goals)[number]) => boolean;
  setGoalsStateHandler: (goal: (typeof goals)[number]) => void;
  error?: string;
  theme: Theme;
}

const GoalsSection: FunctionComponent<GoalsSectionProps> = ({ error, ...props }) => {
  return (
    <View style={styles.root}>
      <CL style={{ color: props.theme.colors.txt.dark, marginBottom: 10 }}>
        Why do you want to meet others? Choose between 1 and to 3
      </CL>
      <FormFieldContainer error={error}>
        <View style={styles.goalsContainer}>
          {goals.map((goal) => (
            <TickBox
              key={goal}
              label={goal}
              onChange={() => props.setGoalsStateHandler(goal)}
              value={props.goalIsSelected(goal)}
              {...props}
              testID={`goals-checkbox-${goal}`}
            />
          ))}
        </View>
      </FormFieldContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { marginTop: 10 },
  goalsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default withTheme(GoalsSection);
