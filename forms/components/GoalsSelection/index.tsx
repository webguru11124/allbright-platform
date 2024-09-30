import goals from "@/utils/data/goals";
import React, { FunctionComponent } from "react";
import { useGoalState } from "@/forms/hooks/useGoalState";
import GoalsSelection from "./GoalsSelection";

interface GoalsSectionProps {
  updateField: (value: (typeof goals)[number][]) => void;
}

const GoalsSectionContainer: FunctionComponent<GoalsSectionProps> = ({
  updateField,
}) => {
  const props = useGoalState({ updateField: updateField });
  return <GoalsSelection {...props} />;
};
export default GoalsSectionContainer;
