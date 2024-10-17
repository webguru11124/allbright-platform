import { StyleSheet, View, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import React from "react";
import { LessonRecommendationModel } from "@/types/Recommendations";
import { CS, H5 } from "@/components/Typography";

import Divider from "./Divider";
import Badge from "./Badge";

const RecommendationCourse: React.FC<LessonRecommendationModel> = (props) => {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    image: {
      width: "100%",
      flex: 1,
    },
    imageContainer: {
      position: "relative",
      aspectRatio: 1,
      overflow: "hidden",
    },
    textContent: {
      paddingTop: 10,
      display: "flex",
      gap: 5,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/test-image.jpg")}
        />
      </View>
      <Badge
        colour={Colors.light.orange}
        text="Academy"
        textColour="white"
      />
      <View style={styles.textContent}>
        <H5>{props.lessonName}</H5>
        <CS>On Demand • {props.lessonActivitiesCollection.total} videos</CS>
        <Divider colour={Colors.light.orange} />
        <CS>{props.lessonIntroductionText}</CS>
      </View>
    </View>
  );
};

export default RecommendationCourse;
