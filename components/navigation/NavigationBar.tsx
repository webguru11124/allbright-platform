import { View } from "react-native";
import { H6 } from "../Typography";
import { usePathname } from "expo-router";
import styled from "styled-components/native";
import IconAllBright from "../IconAllbright";

export default function NavigationBar() {
  const pathName = usePathname();
  return (
    <NavigationBarContainer>
      <TabContainer>
        <TabIconContainer>
          <IconAllBright width={183} />
        </TabIconContainer>
        <TabItem>
          <H6 weight={700} color={"#414143"}>
            Home
          </H6>
        </TabItem>
        <TabItem>
          <H6 weight={700} color={"#414143"}>
            Connect
          </H6>
        </TabItem>
        <TabItem>
          <H6 weight={700} color={"#414143"}>
            Learning
          </H6>
        </TabItem>
        <TabItem>
          <H6 weight={700} color={"#414143"}>
            Events
          </H6>
        </TabItem>
        <TabItem>
          <H6 weight={700} color={"#414143"}>
            Groups
          </H6>
        </TabItem>
        <TabItem>
          <H6 weight={700} color={"#414143"}>
            The Allbright Post
          </H6>
        </TabItem>
      </TabContainer>
      <IconContainer></IconContainer>
    </NavigationBarContainer>
  );
}

function HomeButton() {
  return null;
}

function TabButton() {
  return null;
}

const NavigationBarContainer = styled(View)`
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

const TabItem = styled(View)`
  height: 100%;
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const IconContainer = styled(View)``;
