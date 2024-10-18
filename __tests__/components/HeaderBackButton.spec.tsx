import { fireEvent, renderRouter, screen } from "expo-router/testing-library";
import { View } from "react-native";

import HeaderBackButton from "@/components/HeaderBackButton";
import Link from "@/components/Link";
import Providers from "@/utils/providers";

describe("HeaderBackButton", () => {
  const BUTTON_TEXT = "Click Me!";

  const MockComponent = jest.fn(() => (
    <Providers>
      <View>
        {/* @ts-ignore */}
        <Link href="/screen-1">{BUTTON_TEXT}</Link>
      </View>
    </Providers>
  ));

  function navigateToScreen1() {
    fireEvent.press(screen.getByText(BUTTON_TEXT));
    expect(screen).toHavePathname("/screen-1");
  }

  beforeEach(() => {
    renderRouter(
      {
        index: MockComponent,
        "/screen-1": HeaderBackButton,
      },
      { wrapper: Providers }
    );
  });

  afterEach(() => jest.clearAllMocks());

  it(`should:
      - navigate to the previous screen when pressed
    `, async () => {
    navigateToScreen1();

    expect(screen.getByTestId("HeaderBackButton")).not.toBeNull();
    fireEvent.press(screen.getByTestId("HeaderBackButton"));

    expect(screen).toHavePathname("/");
  });
});
