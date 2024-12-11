import React, { useRef } from "react";
import { Animated, Pressable, StyleProp, StyleSheet, View, ViewProps } from "react-native";

import withTheme from "@/hocs/withTheme";

type Props = {
  setValue: (arg0: string) => void;
  theme: Theme;
  style?: StyleProp<ViewProps> & { marginTop: number };
};

const ColourSquares = ({ setValue, theme, style }: Props) => {
  const cardColours = [
    { hex: theme.colors.background },
    { hex: "#525858" },
    { hex: "#834973" },
    { hex: "#D3B137" },
    { hex: "#6D8868" },
    { hex: "#50968D" },
    { hex: "#955C5C" },
    { hex: "#D18D66" },
    { hex: "#617595" },
    { hex: "#886BB7" },
  ];

  function handleClick(colour: (typeof cardColours)[number]) {
    setValue(colour.hex);
  }

  return (
    <View style={[styles.root, style]}>
      <View style={[styles.main]}>
        {cardColours.map((colour) => (
          <ColourSquare
            key={colour.hex}
            colour={colour}
            onPress={handleClick}
          />
        ))}
      </View>
      <View style={[styles.linkContainer]}></View>
    </View>
  );
};

const ColourSquare = ({ colour, onPress }: { colour: { hex: string }; onPress: Function }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const scaleUp = () => {
    Animated.timing(scaleValue, {
      toValue: 1.1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const scaleDown = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View
      key={colour.hex}
      style={[styles.cardContainer, { transform: [{ scale: scaleValue }] }]}>
      <Pressable
        onPress={() => onPress(colour)}
        onHoverIn={scaleUp}
        onHoverOut={scaleDown}
        style={[styles.cardSquare, { backgroundColor: colour.hex }]}
        testID={colour.hex}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    maxWidth: 300,
    marginTop: 10,
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
    flexWrap: "wrap",
  },
  cardContainer: {
    width: "17%",
  },
  cardSquare: {
    width: "100%",
    paddingTop: "100%",
    overflow: "hidden",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  linkContainer: { height: 5 },
});

export default withTheme(ColourSquares);
