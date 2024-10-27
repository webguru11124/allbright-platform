export default {
  expo: {
    name: "allbright-platform",
    slug: "allbright-platform",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#25292e",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "co.allbrightcollective.platform",
      googleServicesFile: process.env.GOOGLE_SERVICE_INFO_PLIST,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "co.allbrightcollective.platform",
      googleServicesFile: process.env.GOOGLE_SERVICES_FILE,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
      backgroundColor: "#F9F4F0",
    },
    plugins: ["expo-router", "@react-native-google-signin/google-signin"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "6d4ec78f-e4fc-4ec3-965e-11daf503eee3",
      },
    },
    owner: "allbright-org",
  },
};
