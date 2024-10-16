import { View } from "react-native";
import styled from "styled-components/native";
import IconAllBright from "@/components/IconAllbright";

export default function Header() {
  return (
    <HeaderContainer>
      <TabContainer>
        <TabIconContainer>
          <IconAllBright width={183} />
        </TabIconContainer>
      </TabContainer>
      <IconContainer></IconContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(View)`
  height: 82px;
  width: 100%;
  padding-horizontal: 40px;
`;

const TabContainer = styled(View)`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const TabIconContainer = styled(View)`
  height: 100%;
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  margin-right: 50px;
`;

const IconContainer = styled(View)``;
