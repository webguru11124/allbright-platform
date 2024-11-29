import { fireEvent, renderRouter, screen, waitFor } from "expo-router/testing-library";
import { View } from "react-native";

import Login from "@/features/Auth/Login";
import Register from "@/features/Auth/Register";
import Providers from "@/utils/providers";

jest.mock("@/lib/api");

describe("Auth", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Login", () => {
    it(`should:
      - load the /login route and display the login form
      - assert the existence of certain words/phrases
      - Navigate to the '/register' screen when clicking the Register button
      `, async () => {
      renderRouter(
        {
          "/login": jest.fn(() => (
            <Providers>
              <Login />
            </Providers>
          )),
          "/register": jest.fn(() => <View />),
        },
        {
          initialUrl: "/login",
        }
      );

      expect(screen).toHavePathname("/login");
      expect(screen.getByText("Email")).not.toBeNull();
      expect(screen.getByText("Password")).not.toBeNull();
      expect(screen.getByText("Submit")).not.toBeNull();
      expect(screen.getByText("Don't have an account?")).not.toBeNull();
      expect(screen.getByText("Register")).not.toBeNull();

      fireEvent.press(screen.getByText("Register"));

      await waitFor(() => {
        expect(screen).toHavePathname("/register");
      });
    });
  });

  // FIXME: 51-platform-registration-flow - Test skipped as RegisterProfileForm is being refactored
  describe.skip("Register", () => {
    it(`should:
      - load the /register route and display the register form
      - assert the existence of certain words/phrases
      - Navigate to the '/login' screen when clicking the Login button
      `, async () => {
      renderRouter(
        {
          "/register": jest.fn(() => (
            <Providers>
              <Register />
            </Providers>
          )),
          "/login": jest.fn(() => <View />),
        },
        {
          initialUrl: "/register",
        }
      );

      const infoText =
        "I would like to receive relevant information, newsletters and opportunities updates from AllBright by email";
      const offerText =
        "I would like to receive news and special offers from carefully selected partners of AllBright by email to surprise and delight me";

      expect(screen).toHavePathname("/register");
      expect(screen.getByText("First Name")).not.toBeNull();
      expect(screen.getByText("Last Name")).not.toBeNull();
      expect(screen.getByText("Email")).not.toBeNull();
      expect(screen.getByText("City")).not.toBeNull();
      expect(screen.getByText("Country")).not.toBeNull();
      expect(screen.getByText("Password")).not.toBeNull();
      expect(screen.getByText("Confirm Password")).not.toBeNull();
      expect(screen.getByText(/I agree to the AllBright/i)).not.toBeNull();
      expect(screen.getByText("Terms of Use")).not.toBeNull();
      expect(screen.getByText(infoText)).not.toBeNull();
      expect(screen.getByText(offerText)).not.toBeNull();
      expect(screen.getByText("Submit")).not.toBeNull();
      expect(screen.getByText("Already have an account?")).not.toBeNull();
      expect(screen.getByText("Login")).not.toBeNull();

      fireEvent.press(screen.getByText("Login"));

      await waitFor(() => {
        expect(screen).toHavePathname("/login");
      });
    });
  });
});
