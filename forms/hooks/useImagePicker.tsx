import * as ImagePicker from "expo-image-picker";

export const useImagePicker = () => {
  const pickImageAsync = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        return result.assets[0].uri;
      } else {
        throw new Error("Image selection cancelled");
      }
    } catch (error) {
      throw error;
    }
  };

  return pickImageAsync;
};
