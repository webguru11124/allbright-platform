import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import colours from "@/theme";
import { Device } from "@/utils/ui/device";

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
      onPress={props.onChange}>
      <S.Label $isSquare={props.isSquare}>{props.labelText}</S.Label>
    </S.Container>
  );
};

interface StyleProps {
  checked?: boolean;
  $isSquare?: boolean;
}

const S = () => {};

S.Container = styled.TouchableOpacity<StyleProps>`
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

  @media(min-width: ${Device.mobile}) {
    height: 30px;

    ${(p) =>
      p.$isSquare &&
      `
    height: 100px;
    width: 100px;
    padding: 10px;
  `}
  }
`;

S.Label = styled.Text<StyleProps>`
  padding: 0 20px;
  z-index: 1;
  font-size: 1rem;

  ${(p) =>
    p.$isSquare &&
    `
    padding: 0;
    font-weight: 500;
    font-size: 1.1rem;
  `}

  @media (min-width: ${Device.mobile}) {
    font-size: 1.6rem;

    ${(p) =>
      p.$isSquare &&
      `
    font-size: 1.3rem;
  `}
  }
`;

export default PillInput;
