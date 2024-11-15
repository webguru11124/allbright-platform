import React, { FunctionComponent } from "react";

import { useGoalState } from "@/forms/hooks/useGoalState";
import goals from "@/utils/data/goals";

import GoalsSelection from "./GoalsSelection";

interface GoalsSectionProps {
  updateField: (value: (typeof goals)[number][]) => void;
  error?: string;
  field?: (typeof goals)[number][];
}

const GoalsSectionContainer: FunctionComponent<GoalsSectionProps> = ({
  updateField,
  field = [],
  error,
}) => {
  const props = useGoalState({ goals: field, updateField: updateField });
  return (
    <GoalsSelection
      {...props}
      error={error}
    />
  );
};
export default GoalsSectionContainer;
