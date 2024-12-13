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
      output: "single",
      favicon: "./assets/images/favicon/favicon.png",
      name: "AllBright | Redefining ambition",
      backgroundColor: "#F9F4F0",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          backgroundColor: "#232323",
          image: "./assets/images/favicon.png",
          dark: {
            image: "./assets/images/favicon.png",
            backgroundColor: "#000000",
          },
          imageWidth: 200,
        },
      ],
      "@react-native-google-signin/google-signin",
      [
        "react-native-fbsdk-next",
        {
          appID: "3574133856217991",
          clientToken: "164e3ad2efbec9bd026584d023547ad2",
          displayName: "allbright-platform",
          scheme: "fb3574133856217991",
          advertiserIDCollectionEnabled: false,
          autoLogAppEventsEnabled: false,
          isAutoInitEnabled: true,
          iosUserTrackingPermission: "This identifier will be used to deliver personalized ads to you.",
        },
      ],
    ],
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
