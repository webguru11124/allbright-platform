// Mock for firebase/storage
const ref = jest.fn(() => ({
  put: jest.fn(() => Promise.resolve({})),
}));

const getStorage = jest.fn(() => ({}));
const uploadBytes = jest.fn(() => Promise.resolve({}));
const getDownloadURL = jest.fn(() => Promise.resolve("mockUrl"));

module.exports = {
  ref,
  getStorage,
  uploadBytes,
  getDownloadURL,
};
