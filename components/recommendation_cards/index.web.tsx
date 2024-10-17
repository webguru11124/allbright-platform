import { useRef } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";

import { Colors } from "@/constants/Colors";
// import RecommendationArticle from "./RecommendationArticle";
// import RecommendationEvent from "./RecommendationEvent";
// import RecommendationConnection from "./RecommendationConnection";
// import RecommendationCourse from "./RecommendationCourse";
// import RecommendationGroup from "./RecommendationGroup";
// import RecommendationMentorship from "./RecommendationMentorship";
import {
  ArticleRecommendationModel,
  ConnectionRecommendationModel,
  EventRecommendationModel,
  GroupRecommendationModel,
  LessonRecommendationModel,
  // RecommendationType,
  MentorshipRecommendationModel,
  PromotionRecommendationModel,
} from "@/types/Recommendations";

type RecommendationCardProps =
  | ConnectionRecommendationModel
  | MentorshipRecommendationModel
  | LessonRecommendationModel
  | EventRecommendationModel
  | GroupRecommendationModel
  | ArticleRecommendationModel
  | PromotionRecommendationModel;

const RecommendationCard = (props: RecommendationCardProps) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const styles = StyleSheet.create({
    badge: {
      position: "absolute",
      left: 10,
      top: 0,
      backgroundColor: Colors.light.yellow,
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
      backgroundColor: Colors.light.shellOverlay,
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
      // display: "flex",
      gap: 10,
    },
    textContent: {
      // display: "flex",
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

  // const getCardType = (category: RecommendationType) => {
  //   switch (
  //     category
  // FIX: Types failing

  // case "articles":
  //   return <RecommendationArticle {...props} />;
  // case "connections":
  //   return <RecommendationConnection {...props} />;
  // case "courses":
  //   return <RecommendationCourse {...props} />;
  // case "events":
  //   return <RecommendationEvent {...props} />;
  // case "groups":
  //   return <RecommendationGroup {...props} />;
  // case "mentorships":
  //   return <RecommendationMentorship {...props} />;
  // default:
  //   return null;
  //   ) {
  //   }
  // };

  return (
    <Animated.View style={styles.cardContainer}>
      <Pressable
        onHoverIn={scaleUp}
        onHoverOut={scaleDown}
        onPress={() => console.log("CARD CLICKED")}
        style={styles.pressable}>
        {/* {getCardType(props.category)} */}
      </Pressable>
    </Animated.View>
  );
};

export default RecommendationCard;
