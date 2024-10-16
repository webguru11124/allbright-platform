import { CL } from "@/components/Typography";
import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";
import goals from "@/utils/data/goals";
import React, { FunctionComponent, useContext } from "react";
import styled, { css } from "styled-components/native";
import TickBox from "@/forms/components/TickBox";
import FormFieldContainer from "@/forms/components/FormFieldContainer";

type StyleProps = {
  maxWidth: (val: number) => boolean;
  error?: string;
};

interface GoalsSectionProps {
  goalIsSelected: (goal: (typeof goals)[number]) => boolean;
  setGoalsStateHandler: (goal: (typeof goals)[number]) => void;
  error?: string;
}

const GoalsSection: FunctionComponent<GoalsSectionProps> = ({
  error,
  ...props
}) => {
  const { maxWidth } = useContext<MediaQuery>(MediaQueryContext);
  return (
    <>
      <CL>Why do you want to meet others? Choose between 1 and to 3</CL>
      <FormFieldContainer error={error}>
        <GoalsContainer maxWidth={maxWidth}>
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

  ${(props) =>
    !props.maxWidth(BREAKPOINT_TABLET) &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    `}
`;

export default GoalsSection;
