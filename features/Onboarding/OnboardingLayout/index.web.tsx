import { router } from "expo-router";
import styled from "styled-components/native";

import HeaderBackButton from "@/components/HeaderBackButton";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
}

export const OnboadingPageLayout = ({ children }: Props) => {
  return (
    <Main>
      <Container>
        <HeaderButtonsContainer>
          <HeaderBackButton
            onBackPress={() => {
              router.back();
            }}
          />
        </HeaderButtonsContainer>
        <ContentWrap>   
          <Suspense fallback={<Loading />}>{children}</Suspense></ContentWrap>
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

const HeaderButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const Loading = styled.ActivityIndicator.attrs(() => ({
  size: "large",
  color: "#0000ff",
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
