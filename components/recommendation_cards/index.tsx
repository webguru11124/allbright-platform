import { useRef } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";

import { Colors } from "@/constants/Colors";
import {
  ArticleRecommendationModel,
  ConnectionRecommendationModel,
  EventRecommendationModel,
  GroupRecommendationModel,
  LessonRecommendationModel,
  MentorshipRecommendationModel,
  RecommendationModel,
  RecommendationType,
} from "@/types/Recommendations";
import RecommendationArticle from "./RecommendationArticle";
import RecommendationConnection from "./RecommendationConnection";
import RecommendationCourse from "./RecommendationCourse";
import RecommendationEvent from "./RecommendationEvent";
import RecommendationGroup from "./RecommendationGroup";
import RecommendationMentorship from "./RecommendationMentorship";

const RecommendationCard = (props: RecommendationModel) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const styles = StyleSheet.create({
    badge: {
      position: "absolute",
      left: 10,
      top: 0,
      paddingHorizontal: 8,
      paddingVertical: 6,
      fontWeight: 700,
    },
    cardContainer: {
      position: "relative",
      borderColor: Colors.light.shellOverlay,
      borderRadius: 5,
      borderWidth: 1,
      overflow: "hidden",
      width: "auto",
      marginTop: 10,
      marginRight: 10,
      backgroundColor: "white",
      cursor: "pointer",
      transform: [{ scale: scaleValue }],
    },
    divider: {
      marginTop: 5,
      borderRadius: 2,
      height: 5,
      backgroundColor: Colors.light.yellow,
    },
    image: {
      width: "100%",
      flex: 1,
    },
    imageContainer: {
      position: "relative",
      aspectRatio: 1,
      overflow: "hidden",
      backgroundColor: "green",
    },
    pressable: {
      gap: 10,
    },
    textContent: {
      gap: 5,
    },
  });

  const scaleUp = () => {
    Animated.timing(scaleValue, {
      toValue: 1.02,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const scaleDown = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const getCardType = (category: RecommendationType) => {
    switch (category) {
      case "articles":
        return (
          <RecommendationArticle {...(props as ArticleRecommendationModel)} />
        );
      case "connections":
        return (
          <RecommendationConnection
            {...(props as ConnectionRecommendationModel)}
          />
        );
      case "courses":
        return (
          <RecommendationCourse {...(props as LessonRecommendationModel)} />
        );
      case "events":
        return <RecommendationEvent {...(props as EventRecommendationModel)} />;
      case "groups":
        return <RecommendationGroup {...(props as GroupRecommendationModel)} />;
      case "mentorships":
        return (
          <RecommendationMentorship
            {...(props as MentorshipRecommendationModel)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Animated.View style={styles.cardContainer}>
      <Pressable
        onHoverIn={scaleUp}
        onHoverOut={scaleDown}
        onPress={() => console.log("CARD CLICKED")}
        style={styles.pressable}>
        {getCardType(props.category)}
      </Pressable>
    </Animated.View>
  );
};

export default RecommendationCard;
