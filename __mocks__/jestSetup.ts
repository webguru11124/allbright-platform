jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("react-native-device-info", () => {
  return {
    getVersion: () => 4,
    hasNotch: () => false,
  };
});

jest.mock("firebase/app", () => require("./firebase/firebaseAppMock"));
jest.mock("firebase/auth", () => require("./firebase/firebaseAuthMock"));
jest.mock("firebase/storage", () => require("./firebase/firebaseStorageMock"));
jest.mock("firebase/firestore", () =>
  require("./firebase/firebaseFirestoreMock")
);
