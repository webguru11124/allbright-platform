import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "HKGrotesk-Black": require("../../assets/fonts/HKGrotesk-Black.otf"),
    "HKGrotesk-BlackItalic": require("../../assets/fonts/HKGrotesk-BlackItalic.otf"),
    "HKGrotesk-BoldItalic": require("../../assets/fonts/HKGrotesk-BoldItalic.otf"),
    "HKGrotesk-ExtraBold": require("../../assets/fonts/HKGrotesk-ExtraBold.otf"),
    "HKGrotesk-ExtraBoldItalic": require("../../assets/fonts/HKGrotesk-ExtraBoldItalic.otf"),
    "HKGrotesk-ExtraLight": require("../../assets/fonts/HKGrotesk-ExtraLight.otf"),
    "HKGrotesk-ExtraLightItalic": require("../../assets/fonts/HKGrotesk-ExtraLightItalic.otf"),
    "HKGrotesk-Italic": require("../../assets/fonts/HKGrotesk-Italic.otf"),
    "HKGrotesk-Light": require("../../assets/fonts/HKGrotesk-Light.otf"),
    "HKGrotesk-LightItalic": require("../../assets/fonts/HKGrotesk-LightItalic.otf"),
    "HKGrotesk-Medium": require("../../assets/fonts/HKGrotesk-Medium.otf"),
    "HKGrotesk-MediumItalic": require("../../assets/fonts/HKGrotesk-MediumItalic.otf"),
    "HKGrotesk-Regular": require("../../assets/fonts/HKGrotesk-Regular.otf"),
    "HKGrotesk-SemiBold": require("../../assets/fonts/HKGrotesk-SemiBold.otf"),
    "HKGrotesk-SemiBoldItalic": require("../../assets/fonts/HKGrotesk-SemiBoldItalic.otf"),
    "HKGrotesk-Thin": require("../../assets/fonts/HKGrotesk-Thin.otf"),
    "HKGrotesk-ThinItalic": require("../../assets/fonts/HKGrotesk-ThinItalic.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Slot />;
}
