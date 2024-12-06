import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { CL } from "@/components/Typography";
import FormFieldContainer from "@/forms/components/FormFieldContainer";
import TickBox from "@/forms/components/TickBox";
import goals from "@/utils/data/goals";

type StyleProps = {
  error?: string;
};

interface GoalsSectionProps {
  goalIsSelected: (goal: (typeof goals)[number]) => boolean;
  setGoalsStateHandler: (goal: (typeof goals)[number]) => void;
  error?: string;
}

const GoalsSection: FunctionComponent<GoalsSectionProps> = ({ error, ...props }) => {
  return (
    <>
      <CL>Why do you want to meet others? Choose between 1 and to 3</CL>
      <FormFieldContainer error={error}>
        <GoalsContainer>
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
        </GoalsContainer>
      </FormFieldContainer>
    </>
  );
};

const GoalsContainer = styled.View<StyleProps>`
  padding: 15px 0 0 0;
  flex-direction: column;
  gap: 8px;
`;

export default GoalsSection;
