import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { CS, H5 } from "@/components/Typography";
import { Colors } from "@/constants/Colors";
import { MentorshipRecommendationModel } from "@/types/Recommendations";

import Badge from "./Badge";

const RecommendationMentorship: React.FC<MentorshipRecommendationModel> = (props) => {
  const styles = StyleSheet.create({
    container: {},
    image: {
      width: "100%",
      flex: 1,
    },
    imageContainer: {
      position: "relative",
      overflow: "hidden",
      height: 300,
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
        backgroundColor={Colors.light.charcoal}
        text="Mentorships"
        color="white"
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
