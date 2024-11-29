import styled from "styled-components/native";

const Loading = styled.ActivityIndicator.attrs(() => ({
  size: "large",
  color: "#0000ff",
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Loading;
