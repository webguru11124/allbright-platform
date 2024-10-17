import {
  act,
  fireEvent,
  renderRouter,
  screen,
} from "expo-router/testing-library";
import { Button, View } from "react-native";
import IsAuthenticated from "@/components/IsAuthenticated";
import * as utilsToken from "@/utils/token";
import { useRouter } from "expo-router";

jest.mock("@/utils/token");

const SEARCH_TEXT = "Click Me!";

const MockComponentInit = jest.fn(() => {
  const router = useRouter();

  const handlePress = () => {
    // @ts-ignore
    router.push("/protected-route");
  };

  return (
    <Button
      title={SEARCH_TEXT}
      onPress={handlePress}
    />
  );
});

const MockComponent = jest.fn(() => {
  return (
    <IsAuthenticated>
      <View />;
    </IsAuthenticated>
  );
});

describe("IconButton", () => {
  beforeEach(() => {
    renderRouter({
      index: jest.fn(() => <MockComponentInit />),
      "/login": MockComponent,
      "/protected-route": MockComponent,
    });
  });

  afterEach(() => jest.clearAllMocks());

  it(`should:
        - call redirect to /login if authentication fails`, async () => {
    jest.spyOn(utilsToken, "getToken").mockResolvedValue(true);
    expect(screen).toHavePathname("/");
  });

  it(`should:
    - call redirect to /login if authentication fails`, async () => {
    jest.spyOn(utilsToken, "getToken").mockResolvedValue(false);

    expect(screen.getByText(SEARCH_TEXT)).not.toBeNull();

    await act(async () => {
      fireEvent.press(screen.getByText(SEARCH_TEXT));
    });

    expect(screen).toHavePathname("/login");
  });

  it(`should:
    - not call redirect to /login if authentication succeeds`, async () => {
    jest.spyOn(utilsToken, "getToken").mockResolvedValue(true);

    expect(screen.getByText(SEARCH_TEXT)).not.toBeNull();

    await act(async () => {
      fireEvent.press(screen.getByText(SEARCH_TEXT));
    });

    expect(screen).toHavePathname("/protected-route");
  });
});
