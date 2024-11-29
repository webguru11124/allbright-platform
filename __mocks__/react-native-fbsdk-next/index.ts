export const LoginManager = {
  logInWithPermissions: jest.fn(() => Promise.resolve({ isCancelled: false })),
};

export const AccessToken = {
  getCurrentAccessToken: jest.fn(() => Promise.resolve({ accessToken: "mock-token" })),
};
