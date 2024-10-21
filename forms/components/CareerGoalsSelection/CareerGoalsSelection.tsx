import React from "react";
import styled from "styled-components/native";

import allCareerGoals, { CareerGoalType } from "@/utils/data/careerGoals";
import PillInput from "../PillInput";
import { CM } from "@/components/Typography";
import FormFieldContainer from "../FormFieldContainer";

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
                <S.GoalsContainer>
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
                </S.GoalsContainer>
            </FormFieldContainer>
        </>
    );
};

const S = () => { };

S.GoalsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export default CareerGoalsSelection;
