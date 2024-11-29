import React from "react";

import { CareerGoalType } from "@/utils/data/careerGoals";

interface useGoalsProps {
  goals?: CareerGoalType["id"][];
  updateField: (value: CareerGoalType["id"][]) => void;
}
export const useCareerGoalState = ({ goals: defaultGoals = [], updateField }: useGoalsProps) => {
  const [goalsState, setGoalsState] = React.useState<CareerGoalType["id"][]>(defaultGoals);

  React.useEffect(() => {
    if (defaultGoals.length > 0) setGoalsState(defaultGoals);
  }, [defaultGoals]);

  const goalIsSelected = (goal: CareerGoalType) => goalsState?.includes(goal?.id);

  const setGoalsStateHandler = (goal: CareerGoalType) => {
    let goalsList: CareerGoalType["id"][] = [];

    if (goalIsSelected(goal)) {
      goalsList = [...goalsState].filter((item) => item !== goal?.id);
    }

    if (!goalIsSelected(goal)) {
      goalsList = goalsState.length < 6 ? goalsState.concat(goal?.id) : goalsState;
    }
    setGoalsState(goalsList);
    updateField(goalsList);
  };
  return { goalsState, goalIsSelected, setGoalsStateHandler };
};
