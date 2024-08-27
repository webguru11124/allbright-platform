import { View } from "react-native";
import styled from "styled-components/native";

import IconAllBright from "@/components/IconAllbright";
import TabButton from "@/features/Navbar/partials/TabButton";
import { H6 } from "@/components/Typography";

export default function NavigationBar() {
  return (
    <NavigationBarContainer>
      <TabContainer>
        <TabIconContainer>
          <IconAllBright width={183} />
        </TabIconContainer>
        <TabButton href="/home">
          <H6 weight={700} color={"#414143"}>
            Home
          </H6>
        </TabButton>
        <TabButton href="/connect">
          <H6 weight={700} color={"#414143"}>
            Connect
          </H6>
        </TabButton>
        <TabButton href="/">
          <H6 weight={700} color={"#414143"}>
            Learning
          </H6>
        </TabButton>
        <TabButton href="/">
          <H6 weight={700} color={"#414143"}>
            Events
          </H6>
        </TabButton>
        <TabButton href="/">
          <H6 weight={700} color={"#414143"}>
            Groups
          </H6>
        </TabButton>
        <TabButton href="/">
          <H6 weight={700} color={"#414143"}>
            The Allbright Post
          </H6>
        </TabButton>
      </TabContainer>
      <IconContainer></IconContainer>
    </NavigationBarContainer>
  );
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

const IconContainer = styled(View)``;
