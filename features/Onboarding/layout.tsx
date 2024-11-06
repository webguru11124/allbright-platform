import styled from "styled-components/native";

import HeaderBackButton from "@/components/HeaderBackButton";

interface Props {
  onBackPress?: () => void;
  children: React.ReactNode;
}

export const OnboadingPageLayout = ({ children, onBackPress }: Props) => {
  // id
  // const user = useUserProfile();
  return (
    <Main>
      <Container>
        <HeaderButtonsContainer>
          {onBackPress && <HeaderBackButton onBackPress={onBackPress} />}
        </HeaderButtonsContainer>
        <ContentWrap>{children}</ContentWrap>
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
