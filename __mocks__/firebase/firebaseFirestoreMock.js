// Mock for firebase/firestore
const getFirestore = jest.fn(() => ({
  collection: jest.fn(() => ({
    doc: jest.fn(() => ({
      get: jest.fn(() =>
        Promise.resolve({ data: () => ({ mockField: "mockValue" }) })
      ),
      set: jest.fn(() => Promise.resolve({})),
    })),
  })),
}));

module.exports = { getFirestore };
