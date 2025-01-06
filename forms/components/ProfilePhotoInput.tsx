import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { IconCamera } from "@/components/Icons";
import withTheme from "@/hocs/withTheme";

interface ProfilePhotoInputProps {
  imageSrc?: string | null;
  height?: string;
  width?: string;
  pickProfileImage: () => void;
  theme: Theme;
}

const ProfilePhotoInput: React.FunctionComponent<ProfilePhotoInputProps> = (props) => {
  const ImageDisplay = React.useMemo(
    () =>
      props.imageSrc ? (
        <Image
          style={styles.image}
          accessibilityLabel="profile-photo"
          source={props.imageSrc}
          contentFit="cover"
        />
      ) : (
        <IconCamera
          style={styles.cameraIcon}
          testID="camera-icon"
        />
      ),
    [props.imageSrc]
  );

  return (
    <Pressable
      style={[styles.displayPhotoSection]}
      onPress={props.pickProfileImage}>
      <View
        style={[
          styles.displayPhoto,
          { backgroundColor: props.theme.colors.overlay },
          Boolean(props.height) && { height: parseInt(props.height || "") },
          Boolean(props.width) && { height: parseInt(props.width || "") },
        ]}>
        {ImageDisplay}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  displayPhotoSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  displayPhoto: {
    backgroundColor: "transparent",
    borderRadius: 100,
    cursor: "pointer",
    height: 200,
    width: 200,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  cameraIcon: {
    transform: [{ scaleX: 1.6 }],
  },
});

export default withTheme(ProfilePhotoInput);
