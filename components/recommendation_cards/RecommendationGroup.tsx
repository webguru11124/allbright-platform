import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { CS, H5 } from "@/components/Typography";
import { Colors } from "@/constants/Colors";
import { GroupRecommendationModel } from "@/types/Recommendations";

import Badge from "./Badge";
import Divider from "./Divider";

const RecommendationGroup: React.FC<GroupRecommendationModel> = (props) => {
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
        backgroundColor={Colors.light.purple}
        text="Group"
        color="white"
      />
      <View style={styles.textContent}>
        <H5>{props.name}</H5>
        <Divider color={Colors.light.purple} />
        <CS>{props.description}</CS>
      </View>
    </View>
  );
};

export default RecommendationGroup;
