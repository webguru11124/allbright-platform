import { fireEvent, renderRouter, screen } from "expo-router/testing-library";
import { View } from "react-native";
import Navbar from "@/features/Navbar";
import Providers from "@/utils/providers";

jest.mock("@/features/AppStart/partials/BackgroundImageMasonry");

describe("AppStart", () => {
  beforeEach(() => {
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <Navbar />
        </Providers>
      )),
      "/home": jest.fn(() => <View />),
      "/connect": jest.fn(() => <View />),
    });
  });

  afterEach(() => jest.clearAllMocks());

  it(`should:
      - render the Navbar
      - ensure all links are present
    `, () => {
    expect(screen.getByText(/home/i)).not.toBeNull();
    expect(screen.getByText(/connect/i)).not.toBeNull();
    expect(screen.getByText(/learning/i)).not.toBeNull();
    expect(screen.getByText(/events/i)).not.toBeNull();
    expect(screen.getByText(/groups/i)).not.toBeNull();
    expect(screen.getByText(/the allbright post/i)).not.toBeNull();
    expect(screen).toHavePathname("/");
  });

  it(`should:
    - navigate to /home upon clicking Home
  `, () => {
    expect(screen).toHavePathname("/");
    fireEvent.press(screen.getByText(/home/i));
    expect(screen).toHavePathname("/home");
  });

  it(`should:
    - navigate to /connect upon clicking Connect
  `, () => {
    expect(screen).toHavePathname("/");
    fireEvent.press(screen.getByText(/connect/i));
    expect(screen).toHavePathname("/connect");
  });

  it(`should:
    - navigate to / upon clicking Learning
  `, () => {
    expect(screen).toHavePathname("/");
    fireEvent.press(screen.getByText(/learning/i));
    expect(screen).toHavePathname("/");
  });

  it(`should:
    - navigate to / upon clicking Events
  `, () => {
    expect(screen).toHavePathname("/");
    fireEvent.press(screen.getByText(/events/i));
    expect(screen).toHavePathname("/");
  });

  it(`should:
    - navigate to / upon clicking Groups
  `, () => {
    expect(screen).toHavePathname("/");
    fireEvent.press(screen.getByText(/groups/i));
    expect(screen).toHavePathname("/");
  });

  it(`should:
    - navigate to / upon clicking The Allbright Post
  `, () => {
    expect(screen).toHavePathname("/");
    fireEvent.press(screen.getByText(/the allbright post/i));
    expect(screen).toHavePathname("/");
  });
});
