import PublicProfileForm from "@/forms/PublicProfileForm";
import styled from "styled-components/native";

const PublicProfile = () => {
  return (
    <Main>
      <FormContainer>
        <PublicProfileForm />
      </FormContainer>
    </Main>
  );
};

export default PublicProfile;

const Main = styled.View`
  flex: 1;
`;

const FormContainer = styled.View`
  padding: 30px 10px 0 10px;
  flex: 1;
  justify-content: flex-start;
`;
