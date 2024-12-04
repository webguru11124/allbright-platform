import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import IconAllBright from "@/components/IconAllbright";
import { H6 } from "@/components/Typography";
import { Metrics } from "@/constants/Metrics";
import TabButton from "@/features/Navbar/partials/TabButton";
import TabImage from "@/features/Navbar/partials/TabImage";
import { UserModel } from "@/types/user";

type Props = {
  user: Partial<UserModel> | undefined;
};

const NavigationBar = ({ user }: Props) => (
  <NavigationBarContainer>
    <TabContainer>
      <TabTabImageContainer>
        <IconAllBright width={183} />
      </TabTabImageContainer>
      <TabButton href="/home">
        <H6
          fontWeight={700}
          color={"#414143"}>
          Home
        </H6>
      </TabButton>
      <TabButton href="/connect">
        <H6
          fontWeight={700}
          color={"#414143"}>
          Connect
        </H6>
      </TabButton>
      <TabButton href="/learning">
        <H6
          fontWeight={700}
          color={"#414143"}>
          Learning
        </H6>
      </TabButton>
      <TabButton href="/events">
        <H6
          fontWeight={700}
          color={"#414143"}>
          Events
        </H6>
      </TabButton>
      <TabButton href="/groups">
        <H6
          fontWeight={700}
          color={"#414143"}>
          Groups
        </H6>
      </TabButton>
      <TabButton href="/edit">
        <H6
          fontWeight={700}
          color={"#414143"}>
          The Allbright Post
        </H6>
      </TabButton>
    </TabContainer>
    <TabImageContainer>
      <TabImage
        imageSrc={user?.imageSrc}
        initials={(user?.firstName?.slice(0, 1) || "A") + (user?.lastName?.slice(0, 1) || "B")}
      />
    </TabImageContainer>
  </NavigationBarContainer>
);

const NavigationBarContainer = styled(View)`
  height: ${Metrics.navbar.height}px;
  width: 100%;
  padding-horizontal: 40px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TabContainer = styled(View)`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const TabTabImageContainer = styled(View)`
  height: 100%;
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  margin-right: 50px;
`;

const TabImageContainer = styled(View)``;

export default NavigationBar;
