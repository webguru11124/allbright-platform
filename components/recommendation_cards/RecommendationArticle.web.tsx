import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { CS, H5 } from "@/components/Typography";
import { Colors } from "@/constants/Colors";
import { ArticleRecommendationModel } from "@/types/Recommendations";

import Badge from "./Badge";
import Divider from "./Divider";

const RecommendationArticle: React.FC<ArticleRecommendationModel> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/images/test-image.jpg")}
        />
      </View>
      <Badge
        backgroundColor={Colors.light.yellow}
        text="Article"
      />
      <View style={styles.textContent}>
        <H5>{props.title}</H5>
        <CS>By {props.author}</CS>
        <Divider color={Colors.light.yellow} />
      </View>
    </View>
  );
};

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

export default RecommendationArticle;
