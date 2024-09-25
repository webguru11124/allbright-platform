import { StyleSheet, View, Image } from "react-native";

import { Colors } from "@/constants/Colors";
import { CS, H5 } from "../Typography";
import Divider from "./Divider";
import Badge from "./Badge";

const RecommendationCourse = () => {
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
      <Badge colour={Colors.light.orange} text="Academy" textColour="white" />
      <View style={styles.textContent}>
        <H5>How To Negotiate Like A Pro</H5>
        <CS>On Demand • 5 videos</CS>
        <Divider colour={Colors.light.orange} />
        <CS>
          Executive coach, business mentor, and founder of the Southwestern
          Empowerment Katy Kvalvik will teach you how to negotiate your way to
          success.
        </CS>
      </View>
    </View>
  );
};

export default RecommendationCourse;
