import { CM, CXL, H2 } from "@/components/Typography";
import { Image } from "expo-image";
import React, { useCallback, useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import DeviceInfo from "react-native-device-info";
import styled from "styled-components/native";

import Space from "@/components/Space";
import * as Imgs from "@/assets/images/app-start/_index";
import Link from "@/components/Link";

const NOTCH = DeviceInfo.hasNotch();
const SCALE = NOTCH ? 1.2 : 1;
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const IS_8 = WIDTH === 375 && HEIGHT === 667;

const STORE = NOTCH
  ? [
      { img: Imgs.FB, xyc: ["42%", "5%", 80 * SCALE] },
      { img: Imgs.FC, xyc: ["78%", "12%", 50 * SCALE] },
      { img: Imgs.FD, xyc: ["18%", "15%", 60 * SCALE] },
      { img: Imgs.FE, xyc: ["4%", "27%", 70 * SCALE] },
      { img: Imgs.FF, xyc: ["37%", "26%", 55 * SCALE] },
      { img: Imgs.FG, xyc: ["82%", "28%", 45 * SCALE] },
      { img: Imgs.FH, xyc: ["4%", "9%", 40 * SCALE] },
      { img: Imgs.FI, xyc: ["62%", "21%", 65 * SCALE] },
      // ------------------------------------------------
      { img: Imgs.FJ, xyc: ["78%", "58%", 70 * SCALE] },
      { img: Imgs.GA, xyc: ["72%", "74%", 65 * SCALE] },
      { img: Imgs.GB, xyc: ["55%", "61%", 65 * SCALE] },
      // { img: Imgs.GC, xyc: [ '56%', '71%', 50 * SCALE ] },
      { img: Imgs.GF, xyc: ["36%", "76%", 80 * SCALE] },
      { img: Imgs.GE, xyc: ["32%", "65%", 50 * SCALE] },
      { img: Imgs.GG, xyc: ["5%", "59%", 65 * SCALE] },
      { img: Imgs.GD, xyc: ["11%", "75%", 50 * SCALE] },
    ]
  : IS_8
    ? [
        { img: Imgs.FB, xyc: ["42%", "5%", 80 * SCALE] },
        { img: Imgs.FC, xyc: ["78%", "12%", 50 * SCALE] },
        { img: Imgs.FD, xyc: ["18%", "15%", 60 * SCALE] },
        { img: Imgs.FE, xyc: ["4%", "27%", 70 * SCALE] },
        { img: Imgs.FF, xyc: ["37%", "26%", 55 * SCALE] },
        { img: Imgs.FG, xyc: ["82%", "28%", 45 * SCALE] },
        { img: Imgs.FH, xyc: ["4%", "9%", 40 * SCALE] },
        { img: Imgs.FI, xyc: ["62%", "21%", 65 * SCALE] },
        // ------------------------------------------------
        { img: Imgs.FJ, xyc: ["78%", "58%", 70 * SCALE] },
        { img: Imgs.GA, xyc: ["72%", "74%", 65 * SCALE] },
        { img: Imgs.GB, xyc: ["55%", "61%", 65 * SCALE] },
        { img: Imgs.GF, xyc: ["45%", "74%", 60 * SCALE] },
        { img: Imgs.GE, xyc: ["32%", "65%", 50 * SCALE] },
        { img: Imgs.GG, xyc: ["5%", "59%", 65 * SCALE] },
        { img: Imgs.GD, xyc: ["11%", "75%", 50 * SCALE] },
      ]
    : [
        { img: Imgs.FB, xyc: ["42%", "5%", 80 * SCALE] },
        { img: Imgs.FC, xyc: ["78%", "12%", 50 * SCALE] },
        { img: Imgs.FD, xyc: ["18%", "15%", 60 * SCALE] },
        { img: Imgs.FE, xyc: ["4%", "27%", 70 * SCALE] },
        { img: Imgs.FF, xyc: ["37%", "26%", 55 * SCALE] },
        { img: Imgs.FG, xyc: ["82%", "28%", 45 * SCALE] },
        { img: Imgs.FH, xyc: ["4%", "9%", 40 * SCALE] },
        { img: Imgs.FI, xyc: ["62%", "21%", 65 * SCALE] },
        // ------------------------------------------------
        { img: Imgs.FJ, xyc: ["78%", "58%", 70 * SCALE] },
        { img: Imgs.GA, xyc: ["72%", "74%", 65 * SCALE] },
        { img: Imgs.GB, xyc: ["55%", "61%", 65 * SCALE] },
        { img: Imgs.GF, xyc: ["36%", "74%", 80 * SCALE] },
        { img: Imgs.GE, xyc: ["32%", "65%", 50 * SCALE] },
        { img: Imgs.GG, xyc: ["5%", "59%", 65 * SCALE] },
        { img: Imgs.GD, xyc: ["11%", "75%", 50 * SCALE] },
      ];

export default function Index() {
  const nameAnim = useRef(new Animated.Value(0)).current;
  const animY = nameAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [5, -15],
  });

  const onInit = useCallback(() => {
    Animated.timing(nameAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1000,
      delay: 1500,
    }).start();
  }, [nameAnim]);

  useEffect(() => {
    onInit();
  }, [onInit]);

  return (
    <S.Container>
      <StatusBar animated={true} hidden={true} />
      {STORE.map(getImage)}
      <S.BlurWrapper>
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
        <S.SubContainer>
          <Animated.View style={{ opacity: nameAnim, width: "100%" }}>
            <Link href="/register">Join AllBright</Link>
            <Space height={10} />
            <Link
              href="/login"
              background={"rgb(58, 59, 61)"}
              isSecondary={true}>
              <CM color={"rgb(228, 230, 235)"}>Log in</CM>
            </Link>
          </Animated.View>
        </S.SubContainer>
      </S.BlurWrapper>
    </S.Container>
  );

  function getImage(elm: any, idx: number) {
    const [x, y, c] = elm.xyc;
    const currStyle = [SS.one, { left: x, top: y }, { width: c, height: c }];

    return (
      <Image
        key={idx}
        style={currStyle}
        source={elm.img}
        transition={{
          duration: 1000,
          effect: "cross-dissolve",
          timing: "ease-in",
        }}
        blurRadius={0.01}
      />
    );
  }
}
const SS = StyleSheet.create({
  one: { position: "absolute", borderRadius: 50 },
});

const S = {
  Container: styled(SafeAreaView)`
    flex: 1;
    background: ${(p) => {
      //  p.theme.bg.base
      return "#FFF";
    }};
  `,

  SubContainer: styled(View)`
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 15px;
    margin-bottom: ${NOTCH ? 10 : 20}px;
  `,

  BlurWrapper: styled(View)`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
  `,
};
