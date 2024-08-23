import { CM, CXL, H2 } from "@/components/Typography";
import React from "react";
import {
  Animated,
  SafeAreaView,
  StatusBar,
  View,
  ViewProps,
} from "react-native";
import styled from "styled-components/native";

/*eslint import/namespace: ['error', { allowComputed: true }]*/
import Link from "@/components/Link";
import Space from "@/components/Space";
import AppStartImg from "@/features/AppStart/partials/AppStartImg";
import withAppStartProps from "./hocs/withAppStartProps";

type StyleProps = ViewProps & { marginBottom: number };

export type StoreItem = {
  img: number;
  xyc: [x: number, y: number, c: number];
};

export type Props = {
  store: StoreItem[];
  nameAnim: Animated.Value;
  animY: Animated.AnimatedInterpolation<string | number>;
  NOTCH: boolean;
  HEIGHT_OFFSET_PERCENT: number;
};

const Index = ({
  store,
  nameAnim,
  animY,
  NOTCH,
  HEIGHT_OFFSET_PERCENT,
}: Props) => (
  <Container>
    <StatusBar animated={true} hidden={true} />
    {store.map((el, idx) => (
      <AppStartImg
        elm={el}
        idx={idx}
        heightOffsetPercent={HEIGHT_OFFSET_PERCENT}
      />
    ))}

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
        <Animated.View style={{ opacity: nameAnim, width: "100%" }}>
          <Link href="/register">Join AllBright</Link>
          <Space height={10} />
          <Link href="/login" background={"rgb(58, 59, 61)"} isSecondary={true}>
            <CM color={"rgb(228, 230, 235)"}>Log in</CM>
          </Link>
        </Animated.View>
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

const SubContainer = styled(View)<StyleProps>`
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
