import { CM, CXL, H2 } from "@/components/Typography";
import { Image } from "expo-image";
import React, { useCallback, useEffect, useRef } from "react";
import {
  Animated,
  DimensionValue,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import DeviceInfo from "react-native-device-info";
import styled from "styled-components/native";

/*eslint import/namespace: ['error', { allowComputed: true }]*/
import * as Imgs from "@/assets/images/app-start/_index";
import Link from "@/components/Link";
import Space from "@/components/Space";
import { STORE } from "./constants";

const NOTCH = DeviceInfo.hasNotch();
const HEIGHT_OFFSET_PERCENT = 4.7;

export default function Index() {
  const nameAnim = useRef(new Animated.Value(0)).current;
  const animY = nameAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [5, -15],
  });

  type ImgType = {
    [key: string]: number;
  };

  const typedImgs: ImgType = { ...Imgs };

  const store = STORE.map((el) => ({
    ...el,
    img: typedImgs[el.img],
  }));

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
      {store.map(getImage)}
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
    const [x, y, c]: [x: number, y: number, c: number] = elm.xyc;
    const xDim: DimensionValue = `${x}%`;
    const yDim: DimensionValue = `${y - HEIGHT_OFFSET_PERCENT}%`;
    const currStyle = [
      SS.one,
      {
        left: xDim,
        top: yDim,
      },
      { width: c, height: c },
    ];

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
