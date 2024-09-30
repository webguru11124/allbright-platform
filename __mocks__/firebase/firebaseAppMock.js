// Mock for firebase/app
const initializeApp = jest.fn(() => ({
  name: "[DEFAULT]",
  options: { projectId: "mock-project" },
}));

module.exports = { initializeApp };
