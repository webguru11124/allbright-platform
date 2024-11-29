import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { CL } from "@/components/Typography";
import FormFieldContainer from "@/forms/components/FormFieldContainer";
import PillInput from "@/forms/components/PillInput";
import { interests } from "@/utils/data/interests";

type StyleProps = {
  error?: string;
};

interface InterestsSelectionProps {
  interestIsSelected: (interest: (typeof interests)[number]) => boolean;
  setInterestStateHandler: (interest: (typeof interests)[number]) => void;
  error?: string;
}

const InterestsSelection: FunctionComponent<InterestsSelectionProps> = ({ error, ...props }) => {
  return (
    <>
      <CL>Interests* (at least 1)</CL>

      <FormFieldContainer error={error}>
        <S.GoalsContainer>
          {interests.map((interest: string) => (
            <PillInput
              key={interests.indexOf(interest)}
              name={interest}
              labelText={interest}
              isChecked={props.interestIsSelected(interest)}
              onChange={() => props.setInterestStateHandler(interest)}
            />
          ))}
        </S.GoalsContainer>
      </FormFieldContainer>
    </>
  );
};

const S = () => {};

S.Container = styled.View<StyleProps>`
  padding: 10px 0 0 0;

  ${(p) =>
    p.error &&
    `
    border-width: 3px;
    border-color: red;
    border-radius: 5px;
  `}
`;

S.GoalsContainer = styled.View`
  padding: 15px 0;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
`;

export default InterestsSelection;
