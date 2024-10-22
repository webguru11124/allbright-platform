import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import colours from "@/theme";

interface PillInputProps {
  name: string;
  labelText: string;
  isChecked: boolean;
  isSquare?: boolean;
  onChange: () => void;
}

const PillInput: FunctionComponent<PillInputProps> = (props) => {
  return (
    <S.Container
      data-cy={`${props.name.toLowerCase().replace(/[\W_]+/g, "_")}-pill`}
      checked={props.isChecked}
      $isSquare={props.isSquare}
      onPress={props.onChange}
      testID={`interests-checkbox-${props.labelText}`}>
      <S.Label $isSquare={props.isSquare}>{props.labelText}</S.Label>
    </S.Container>
  );
};

interface StyleProps {
  checked?: boolean;
  $isSquare?: boolean;
}

const S = () => {};

S.Container = styled.Pressable<StyleProps>`
  align-items: center;
  justify-content: center;
  position: relative;
  height: 25px;
  align-items: center;
  background: ${colours.shellOverlay};
  border-radius: 50px;
  transition: transform 0.1s linear;
  ${(p) =>
    p.$isSquare &&
    `
    height: 80px;
    width: 80px;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
  `}

  ${(p) =>
    p.checked &&
    `
    background: ${colours.pillTeal};
  `}

    ${(p) =>
    p.$isSquare &&
    `
    height: 100px;
    width: 100px;
    padding: 10px;
  `}
`;

S.Label = styled.View<StyleProps>`
  padding: 0 20px;
  z-index: 1;
  font-size: 1.4rem;

  ${(p) =>
    p.$isSquare &&
    `
    padding: 0;
    font-weight: 500;
    font-size: 1.1rem;
  `}
`;

export default PillInput;
