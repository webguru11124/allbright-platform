import { act, fireEvent, renderRouter, screen } from "expo-router/testing-library";
import { View } from "react-native";

import Link from "@/components/Link";
import Logout from "@/features/Account/Logout";
import Providers from "@/utils/providers";
import { getToken, setToken } from "@/utils/token";

describe("HeaderBackButton", () => {
  const BUTTON_TEXT = "Click Me!";

  const MockComponent = jest.fn(() => (
    <Providers>
      <View>
        {/* @ts-ignore */}
        <Link href="/logout">{BUTTON_TEXT}</Link>
      </View>
    </Providers>
  ));

  beforeEach(() => {
    return renderRouter(
      {
        index: MockComponent,
        "/logout": () => (
          <Providers>
            <Logout />
          </Providers>
        ),
      },
      { wrapper: Providers }
    );
  });

  afterEach(() => jest.clearAllMocks());

  it(`should:
      - navigate to the previous screen when pressed
    `, async () => {
    const TOKEN = "TEST";

    await setToken(TOKEN);
    expect(await getToken()).toBe(TOKEN);

    fireEvent.press(screen.getByText(BUTTON_TEXT));
    expect(screen).toHavePathname("/logout");

    expect(screen.getByText("Logout")).not.toBeNull();

    await act(() => {
      fireEvent.press(screen.getByText("Logout"));
    });

    expect(screen).toHavePathname("/");
    expect(await getToken()).toBe("");
  });
});
