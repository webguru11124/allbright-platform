import React from "react";

import goals from "@/utils/data/goals";

interface useGoalsProps {
  goals?: (typeof goals)[number][];
  updateField: (value: (typeof goals)[number][]) => void;
}
export const useGoalState = ({
  goals: defaultGoals = [],
  updateField,
}: useGoalsProps) => {
  const [goalsState, setGoalsState] =
    React.useState<(typeof goals)[number][]>(defaultGoals);

  React.useEffect(() => {
    if (defaultGoals.length > 0) setGoalsState(defaultGoals);
  }, [defaultGoals]);
  const goalIsSelected = (goal: (typeof goals)[number]) =>
    goalsState?.includes(goal);

  const setGoalsStateHandler = (goal: (typeof goals)[number]) => {
    let goalsList: (typeof goals)[number][] = [];

    if (goalIsSelected(goal)) {
      goalsList = [...goalsState].filter((item) => item !== goal);
    }

    if (!goalIsSelected(goal)) {
      goalsList = goalsState.length < 3 ? goalsState.concat(goal) : goalsState;
    }
    setGoalsState(goalsList);
    updateField(goalsList);
  };
  return { goalsState, goalIsSelected, setGoalsStateHandler };
};
