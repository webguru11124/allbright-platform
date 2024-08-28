import { CXL, H2 } from "@/components/Typography";
import React from "react";
import { Animated, SafeAreaView, StatusBar, View } from "react-native";
import styled from "styled-components/native";

import Space from "@/components/Space";
import withAppStartProps from "@/features/AppStart/hocs/withAppStartProps";
import BackgroundImageMasonry from "@/features/AppStart/partials/BackgroundImageMasonry";
import EntryButtons from "@/features/AppStart/partials/EntryButtons";
import { AppStartProps, AppStartStyleProps } from "@/features/AppStart/types";

const Index = ({
  store,
  nameAnim,
  animY,
  NOTCH,
  heightOffset,
}: AppStartProps) => (
  <Container>
    <StatusBar animated={true} hidden={true} />
    <BackgroundImageMasonry store={store} heightOffset={heightOffset} />
    <BlurWrapper>
      <Space height={NOTCH ? 15 : 50} />
      <Animated.View
        style={{ opacity: nameAnim, transform: [{ translateY: animY }] }}>
        <H2 textAlign={"center"}>Welcome to AllBright.</H2>
        <Space height={10} />
        <CXL textAlign={"center"}>
          A professional community for
          {"\n"} smart-minded women
        </CXL>
      </Animated.View>
      <SubContainer marginBottom={NOTCH ? 10 : 20}>
        <EntryButtons nameAnim={nameAnim} />
      </SubContainer>
    </BlurWrapper>
  </Container>
);

const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${(p) => {
    return "#FFF";
  }};
`;

const SubContainer = styled(View)<AppStartStyleProps>`
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 15px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

const BlurWrapper = styled(View)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

export default withAppStartProps(Index);
