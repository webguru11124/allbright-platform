import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { H4 } from "@/components/Typography";

type Props = {
  theme: Theme;
  imageSrc: string | null | undefined;
  initials: string;
  height: number;
  width: number;
};

const ImageOrInitials = ({ theme, imageSrc, initials, height, width }: Props) =>
  Boolean(imageSrc) ? (
    <Image
      style={[{ height: height, width: width, borderRadius: height / 2, borderWidth: 1, borderColor: "#EEE" }]}
      source={imageSrc}
      alt={`${initials}`}
    />
  ) : (
    <View
      style={[
        styles.initialsContainer,
        { backgroundColor: theme.colors.background, height: height, width: width, borderRadius: height / 2 },
      ]}>
      <H4 style={styles.initials}>{initials}</H4>
    </View>
  );

const styles = StyleSheet.create({
  initialsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    fontWeight: 100,
  },
});

export default ImageOrInitials;
