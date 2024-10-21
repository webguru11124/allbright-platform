import CareerGoalsSelection from "./CareerGoalsSelection";
import { CareerGoalType } from "@/utils/data/careerGoals";
import { useCareerGoalState } from "@/forms/hooks/useCareerGoalState";

interface Props {
    updateField: (value: CareerGoalType["id"][]) => void;
    error?: string;
}
const CareerGoalsSelectionContainer = ({ error, updateField }: Props) => {
    const {
        goalIsSelected,
        setGoalsStateHandler } = useCareerGoalState({ updateField });
    return (
        <CareerGoalsSelection
            goalIsSelected={goalIsSelected}
            onSelectedHandler={setGoalsStateHandler}
            error={error}
        />
    );
}
export default CareerGoalsSelectionContainer;