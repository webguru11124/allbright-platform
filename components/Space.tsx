import styled from "styled-components/native";

const Space = styled.View<{ height?: number; width?: number }>`
  ${(p) => (p.height ? `height: ${p.height}px` : "")}
  ${(p) => (p.width ? `width: ${p.width}px` : "")}
`;

export default Space;
