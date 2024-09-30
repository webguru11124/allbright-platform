import { CL } from "@/components/Typography";
import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";
import goals from "@/utils/data/goals";
import { errorOutline } from "@/utils/ui/errorOutline";
import React, { FunctionComponent, useContext } from "react";
import styled, { css } from "styled-components/native";
import TickBox from "../TickBox";

type StyleProps = {
  maxWidth: (val: number) => boolean;
  error?: boolean;
};

interface GoalsSectionProps {
  goalIsSelected: (goal: (typeof goals)[number]) => boolean;
  setGoalsStateHandler: (goal: (typeof goals)[number]) => void;
  error?: boolean;
}

const GoalsSection: FunctionComponent<GoalsSectionProps> = (props) => {
  const { maxWidth } = useContext<MediaQuery>(MediaQueryContext);
  return (
    <Container
      error={props.error}
      maxWidth={maxWidth}>
      <CL>Why do you want to meet others? Choose between 1 and to 3</CL>
      <GoalsContainer maxWidth={maxWidth}>
        {goals.map((goal) => (
          <TickBox
            key={goal}
            label={goal}
            onChange={() => props.setGoalsStateHandler(goal)}
            value={props.goalIsSelected(goal)}
            {...props}
            error=""
            testID={`goals-checkbox-${goal}`}
          />
        ))}
      </GoalsContainer>
    </Container>
  );
};

const Container = styled.View<StyleProps>`
  padding: 10px 0;

  ${(p) =>
    p.error &&
    `
    ${errorOutline}
    border-radius: 5px;
  `}
`;

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
