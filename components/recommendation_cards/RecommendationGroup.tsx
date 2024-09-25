import { StyleSheet, View, Image } from "react-native";

import { Colors } from "@/constants/Colors";
import { CS, H5 } from "../Typography";
import Divider from "./Divider";
import Badge from "./Badge";

const RecommendationGroup = () => {
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
      <Badge colour={Colors.light.purple} text="Group" textColour="white" />
      <View style={styles.textContent}>
        <H5>EvolveHer</H5>
        <Divider colour={Colors.light.purple} />
        <CS>
          Bringing together like-minded women to connect, share and learn.
        </CS>
      </View>
    </View>
  );
};

export default RecommendationGroup;
