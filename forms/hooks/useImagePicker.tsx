import * as ImagePicker from "expo-image-picker";

export const useImagePicker = () => {
  const resizeImageForWeb = async (uri: string, targetWidth: number = 800): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Failed to get canvas context"));
          return;
        }

        // Calculate new dimensions maintaining aspect ratio
        const aspectRatio = img.height / img.width;
        const newWidth = targetWidth;
        const newHeight = targetWidth * aspectRatio;

        // Set canvas dimensions
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Draw and resize image on canvas
        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        // Convert to base64/blob
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Failed to create blob"));
              return;
            }
            resolve(URL.createObjectURL(blob));
          },
          "image/jpeg",
          0.9
        );
      };

      img.onerror = () => {
        reject(new Error("Failed to load image"));
      };

      img.src = uri;
    });
  };

  const pickImageAsync = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        // Only resize if we're on web platform
        if (typeof window !== "undefined" && window.document) {
          const resizedUri = await resizeImageForWeb(uri);
          return resizedUri;
        }
        return uri;
      } else {
        throw new Error("Image selection cancelled");
      }
    } catch (error) {
      throw error;
    }
  };

  return pickImageAsync;
};
