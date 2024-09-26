import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { Colors } from "@/constants/Colors";
import { CS, H5 } from "../Typography";
import Badge from "./Badge";
import { MentorshipRecommendationModel } from "@/types/Recommendations";

const RecommendationMentorship: React.FC<MentorshipRecommendationModel> = (
  props
) => {
  const styles = StyleSheet.create({
    container: {},
    image: {
      width: "100%",
      flex: 1,
    },
    imageContainer: {
      position: "relative",
      overflow: "hidden",
      height: 400,
    },
    nameContainer: {
      paddingLeft: 20,
      backgroundColor: "rgba(52, 52, 52, 0.8)",
    },
    textContent: {
      position: "absolute",
      bottom: 20,
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
        colour={Colors.light.charcoal}
        text="Mentorships"
        textColour="white"
      />
      <View style={styles.textContent}>
        <H5 color="white">
          <Text style={styles.nameContainer}>{props.firstName}</Text>
          {/* <Space/> */}
          <Text style={styles.nameContainer}>{props.lastName}</Text>
        </H5>
        <CS color="white">{props.jobTitle}</CS>
      </View>
    </View>
  );
};

export default RecommendationMentorship;
