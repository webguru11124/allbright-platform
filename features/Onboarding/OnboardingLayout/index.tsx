import { Suspense } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

interface Props {
  children: React.ReactNode;
}

export const OnboadingPageLayout = ({ children }: Props) => {
  return (
    <Main>
      <Container>
        <ContentWrap>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </ContentWrap>
      </Container>
    </Main>
  );
};
const Main = styled.ScrollView`
  flex: 1;
`;
const Container = styled.SafeAreaView`
  flex-direction: column;
  align-items: center;
  margin: 30px 20px;
  flex: 1;
`;

const ContentWrap = styled.View`
  width: 100%;
  max-width: 640px;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const Loading = styled.ActivityIndicator.attrs(() => ({
  size: "large",
  color: "#0000ff",
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;