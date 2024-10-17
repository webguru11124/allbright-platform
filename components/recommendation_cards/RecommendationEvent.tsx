import { StyleSheet, View, Image } from "react-native";

import { Colors } from "@/constants/Colors";
import { CS, H5 } from "../Typography";
import Divider from "./Divider";
import Badge from "./Badge";
import React from "react";
import { EventRecommendationModel } from "@/types/Recommendations";

const RecommendationEventCard: React.FC<EventRecommendationModel> = (props) => {
  const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    image: {
      width: "100%",
      flex: 1,
    },
    imageContainer: {
      position: "relative",
      aspectRatio: 1.5,
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
        colour={Colors.light.green}
        text="Event"
      />
      <View style={styles.textContent}>
        <H5>{props.title}</H5>
        <CS>{props.location} • Oct 23rd</CS>
        <Divider colour={Colors.light.green} />
        <CS>{props.description}</CS>
      </View>
    </View>
  );
};

export default RecommendationEventCard;
