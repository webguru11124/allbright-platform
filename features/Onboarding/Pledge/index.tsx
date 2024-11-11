import React from "react";
import styled from "styled-components/native";

import { CS, CXL, H4 } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import PledgeForm from "@/forms/PledgeForm";
import colours from "@/theme";
import pledge from "@/utils/data/pledge";

interface StyledProps {
  weight: string;
}

const Pledge = () => {
  return (
    <OnboadingPageLayout>
      <H4>Welcome to AllBright, </H4>
      <S.CS weight="700">Our pledge</S.CS>
      <S.List>
        {pledge.map((item) => (
          <S.ListItem key={item}>
            <BulletPoint />
            <S.CXL weight="500">{item}</S.CXL>
          </S.ListItem>
        ))}
      </S.List>

      <PledgeForm />
    </OnboadingPageLayout>
  );
};

const BulletPoint = styled.View`
  background: ${colours.plusLime};
  height: 10px;
  width: 10px;

  margin-right: 10px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const S = () => {};
S.CS = styled(CS)<StyledProps>`
  font-weight: ${(props) => props.weight};
`;

S.CXL = styled(CXL)<StyledProps>`
  font-weight: ${(props) => props.weight};
`;

S.List = styled.View`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 10px 0;
`;

S.ListItem = styled.View`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export default Pledge;
