import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { Colors } from "@/constants/Colors";
import { CS, H5 } from "../Typography";
import Badge from "./Badge";
import Divider from "./Divider";
import { RecommendedArticle } from "@/types/article/Article";

const RecommendationArticle: React.FC<RecommendedArticle> = (props) => {
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
          source={require("@/assets/images/test-image.jpg")}
        />
      </View>
      <Badge
        colour={Colors.light.yellow}
        text="Article"
      />
      <View style={styles.textContent}>
        <H5>{props.title}</H5>
        <CS>By {props.author}</CS>
        <Divider colour={Colors.light.yellow} />
      </View>
    </View>
  );
};

export default RecommendationArticle;
