import React from "react";
import { Animated, StyleSheet, View } from "react-native";

import { AllBrightVector } from "@/components/Icons";
import useTheme from "@/hooks/useTheme";

export const defaultTexts = [
  "Our Mentorship programme allows you to select your own mentor from our pool of experts.",
  "You can add any AllBright member just by tapping their business card and choosing 'connect'.",
  "The latest events or courses you are attending will appear on your home screen.",
  "The recommendations on your home screen are specially curated just for you.",
  "You can curate your own learning by saving courses to come back to later.",
  "We now encourage you to join in with Question of the Week in our Conversation.",
];

const MemberLoading = () => {
  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const opacityAnim = React.useRef(new Animated.Value(0)).current;

  // Function to get a new random index
  const getRandomIndex = (current: number) => {
    let newIndex = Math.floor(Math.random() * defaultTexts.length);
    while (newIndex === current) {
      newIndex = Math.floor(Math.random() * defaultTexts.length);
    }
    return newIndex;
  };

  // Function to start the animation
  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
        delay: 4000,
      }),
    ]).start(() => {
      const newIndex = getRandomIndex(currentIndex);
      setCurrentIndex(newIndex);
      startAnimation();
    });
  };

  React.useEffect(() => {
    const initialIndex = getRandomIndex(-1);
    setCurrentIndex(initialIndex);
    startAnimation();
  }, []);

  const theme = useTheme();

  return (
    <View style={styles.page}>
      <AllBrightVector color={theme.colors.headerText} />
      {currentIndex >= 0 && (
        <Animated.Text style={[styles.loadingText, { opacity: opacityAnim }]}>
          {defaultTexts[currentIndex]}
        </Animated.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    marginTop: 20,
  },
});

export default MemberLoading;
