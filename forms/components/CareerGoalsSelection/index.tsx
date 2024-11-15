import { useCareerGoalState } from "@/forms/hooks/useCareerGoalState";
import { CareerGoalType } from "@/utils/data/careerGoals";

import CareerGoalsSelection from "./CareerGoalsSelection";

interface Props {
  updateField: (value: CareerGoalType["id"][]) => void;
  field?: CareerGoalType["id"][];
  error?: string;
}
const CareerGoalsSelectionContainer = ({
  error,
  field = [],
  updateField,
}: Props) => {
  const { goalIsSelected, setGoalsStateHandler } = useCareerGoalState({
    goals: field,
    updateField,
  });

  return (
    <CareerGoalsSelection
      goalIsSelected={goalIsSelected}
      onSelectedHandler={setGoalsStateHandler}
      error={error}
    />
  );
};
export default CareerGoalsSelectionContainer;
