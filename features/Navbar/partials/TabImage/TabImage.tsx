import { Image } from "expo-image";
import { Pressable, StyleSheet, View } from "react-native";

import { H4 } from "@/components/Typography";
import { Metrics } from "@/constants/Metrics";

type Props = {
  theme: Theme;
  imageSrc: string | null | undefined;
  initials: string;
  onPress: GestureEvent;
};

const TabImage = ({ theme, imageSrc, initials, onPress }: Props) => (
  <Pressable onPress={onPress}>
    {Boolean(imageSrc) ? (
      <Image
        style={styles.img}
        source={imageSrc}
      />
    ) : (
      <View
        style={[
          styles.initialsContainer,
          { backgroundColor: theme.colors.background },
        ]}>
        <H4 style={styles.initials}>{initials}</H4>
      </View>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  img: {
    height: Metrics.navbar.userImageHeight,
    width: Metrics.navbar.userImageHeight,
    borderRadius: Metrics.navbar.userImageHeight / 2,
  },
  initialsContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: Metrics.navbar.userImageHeight,
    width: Metrics.navbar.userImageHeight,
    borderRadius: Metrics.navbar.userImageHeight / 2,
  },
  initials: {
    fontWeight: 100,
  },
});

export default TabImage;
