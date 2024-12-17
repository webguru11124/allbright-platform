export const initializeApp = jest.fn().mockReturnValue({
  name: "[DEFAULT]",
  options: {},
});

export const getApp = jest.fn().mockReturnValue({
  name: "[DEFAULT]",
  options: {},
});

export const getApps = jest.fn().mockReturnValue([]);

export const deleteApp = jest.fn().mockResolvedValue(undefined);

export const onLog = jest.fn();

export const registerVersion = jest.fn();

export const setLogLevel = jest.fn();

// Firebase App types
export type FirebaseApp = {
  name: string;
  options: object;
};

export type FirebaseOptions = {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
};
