jest.mock("firebase/storage", () => require("./firebase/firebase-storage"));
jest.mock("firebase/app", () => require("./firebase/firebase-app"));
jest.mock("firebase/auth", () => ({
  ...jest.requireActual("./firebase/firebase-auth"),
  getReactNativePersistence: () => {},
  initializeAuth: () => {},
}));

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("react-native-device-info", () => {
  return {
    getVersion: () => 4,
    hasNotch: () => false,
  };
});

jest.mock("react-native-fbsdk-next");

jest.mock("@react-native-google-signin/google-signin", () => {
  return {
    GoogleSignin: {
      configure: jest.fn(),
      hasPlayServices: jest.fn().mockResolvedValue(true),
      signIn: jest.fn().mockResolvedValue({
        idToken: "mock-id-token",
        user: {
          email: "test@example.com",
          id: "123",
        },
      }),
      signOut: jest.fn().mockResolvedValue(null),
    },
  };
});
