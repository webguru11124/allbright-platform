import styled from "styled-components/native";

export const OnboadingPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Main>
      <Container>
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
