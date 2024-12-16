import React from "react";

import { CareerGoalType } from "@/utils/data/careerGoals";

interface useGoalsProps {
  goals?: CareerGoalType[];
  updateField: (value: CareerGoalType[]) => void;
}
export const useCareerGoalState = ({ goals: defaultGoals = [], updateField }: useGoalsProps) => {
  const [goalsState, setGoalsState] = React.useState<CareerGoalType[]>(defaultGoals);

  React.useEffect(() => {
    if (defaultGoals.length > 0) setGoalsState(defaultGoals);
  }, [defaultGoals]);

  const goalIsSelected = (goal: CareerGoalType) => goalsState?.some((g) => g?.id === goal?.id);

  const setGoalsStateHandler = (goal: CareerGoalType) => {
    let goalsList: CareerGoalType[] = [];

    if (goalIsSelected(goal)) {
      goalsList = [...goalsState].filter((item) => item?.id !== goal?.id);
    }

    if (!goalIsSelected(goal)) {
      goalsList = goalsState.length < 6 ? goalsState.concat(goal) : goalsState;
    }
    setGoalsState(goalsList);
    updateField(goalsList);
  };
  return { goalsState, goalIsSelected, setGoalsStateHandler };
};
