import { fireEvent, renderRouter, screen } from "expo-router/testing-library";
import { Text } from "react-native";

import Link from "@/components/Link";
import Providers from "@/utils/providers";

const STARTING_ROUTE = "Go back";
const ROUTE_1 = "Go to router 1";

const MockComponentInit = () => {
  return (
    // @ts-ignore
    <Link href="/route-1">
      <Text>{ROUTE_1}</Text>
    </Link>
  );
};

const MockComponent = jest.fn(() => {
  return (
    <Link href="/">
      <Text>{STARTING_ROUTE}</Text>
    </Link>
  );
});

describe("IconButton", () => {
  beforeEach(() => {
    renderRouter(
      {
        index: jest.fn(() => <MockComponentInit />),
        "/route-1": MockComponent,
      },
      {
        wrapper: Providers,
      }
    );
  });

  afterEach(() => jest.clearAllMocks());

  it(`should:
        - navigate to the correct route when pressed`, async () => {
    expect(screen).toHavePathname("/");

    fireEvent.press(screen.getByText(ROUTE_1));

    expect(screen).toHavePathname("/route-1");

    fireEvent.press(screen.getByText(STARTING_ROUTE));

    expect(screen).toHavePathname("/");
  });
});
