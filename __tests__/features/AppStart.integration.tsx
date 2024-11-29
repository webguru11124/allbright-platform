import { fireEvent, renderRouter, screen } from "expo-router/testing-library";

import AppStart from "@/features/AppStart";
import Providers from "@/utils/providers";

jest.mock("@/features/AppStart/partials/BackgroundImageMasonry");

describe("AppStart", () => {
  beforeEach(() => {
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <AppStart />
        </Providers>
      )),
    });
  });

  afterEach(() => jest.clearAllMocks());

  it(`should:
      - render the AppStart feature
    `, () => {
    expect(screen.getByText(/Welcome to AllBright./)).not.toBeNull();
    expect(screen.getByText(/A professional community for smart-minded women/)).not.toBeNull();
  });

  it(`should:
    - render the login button
    - go to /login when pressing the login button
  `, () => {
    const loginBtn = screen.getByText("Log in");
    expect(loginBtn).not.toBeNull();

    fireEvent.press(loginBtn);
    expect(screen).toHavePathname("/login");
  });

  it(`should:
  - render the register button
  - go to /regiser when pressing the register button
`, () => {
    const registerBtn = screen.getByText("Join AllBright");
    expect(registerBtn).not.toBeNull();

    fireEvent.press(registerBtn);
    expect(screen).toHavePathname("/register");
  });
});
