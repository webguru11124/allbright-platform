// Mock for firebase/auth
const getAuth = jest.fn(() => ({
  currentUser: { uid: "mockUserId", email: "mock@user.com" },
}));

module.exports = { getAuth };
