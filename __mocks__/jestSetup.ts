jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("react-native-device-info", () => {
  return {
    getVersion: () => 4,
    hasNotch: () => false,
  };
});

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
