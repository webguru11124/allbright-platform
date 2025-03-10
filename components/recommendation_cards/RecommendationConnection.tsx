import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { CS, H5 } from "@/components/Typography";
import { Colors } from "@/constants/Colors";
import { ConnectionRecommendationModel } from "@/types/Recommendations";

import Badge from "./Badge";
import Divider from "./Divider";

const RecommendationConnection: React.FC<ConnectionRecommendationModel> = (props) => {
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
      alignSelf: "center",
      borderRadius: 100,
      width: "70%",
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
        backgroundColor={Colors.light.teal}
        text="Connection"
        color="white"
      />
      <View style={styles.textContent}>
        <H5>
          {props.firstName} {props.lastName}
        </H5>
        <CS>{props.jobTitle}</CS>
        <CS>{props.location}</CS>
        <Divider color={Colors.light.teal} />
      </View>
    </View>
  );
};

export default RecommendationConnection;
