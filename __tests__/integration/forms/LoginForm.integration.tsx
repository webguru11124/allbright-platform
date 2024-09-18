import { faker } from "@faker-js/faker";
import { fireEvent, userEvent } from "@testing-library/react-native";
import { act, renderRouter, screen } from "expo-router/testing-library";
import { ReactTestInstance } from "react-test-renderer";

import LoginForm from "@/forms/LoginForm";
import api from "@/lib/api";
import Providers from "@/utils/providers";
import * as tokenFns from "@/utils/token";

jest.mock("@/lib/api");
const mockedApi = api as jest.Mocked<typeof api>;

describe("LoginForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`should:
      - Make a call to api.post which returns a bearer token
      - Call the setToken function
      - Navigate to the '/home' route
      `, async () => {
    const MOCK_TOKEN = "my-bearer-token";
    const EMAIL = faker.internet.email();
    const PASS = faker.internet.password();

    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <LoginForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");

    fireEvent.changeText(screen.getByText("Email"), EMAIL);
    fireEvent.changeText(screen.getByText("Password"), PASS);

    mockedApi.post.mockResolvedValueOnce(MOCK_TOKEN);

    const tokenSpy = jest.spyOn(tokenFns, "setToken");

    await act(() => {
      fireEvent.press(screen.getByText("Submit"));
    });

    expect(tokenSpy).toHaveBeenCalledWith(MOCK_TOKEN);
    expect(screen).toHavePathname("/home");
  });

  it(`should:
    - Enter an incorrectly formatted email address
    - Enter a password that isn't long enough
    - Display the email error message
    - Display the password error message
    `, async () => {
    const EMAIL = "not-an-email-address";
    const PASS = "123";
    const EXPECTED_EMAIL = `"Email" must be a valid email`;
    const EXPECTED_PASS = `"Password" length must be at least 4 characters long`;

    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <LoginForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");

    // Need to search for inputs with placeholder text of "" due
    // to the way react-native-floating-label-input works
    // TODO: move to its own function findAllTextInputs

    const [emailInput, passwordInput]: ReactTestInstance[] =
      await screen.findAllByPlaceholderText("");

    const user = userEvent.setup();

    // TODO: move to its own function: fireBlurEvent
    // paste fires onBlur
    await user.paste(emailInput, EMAIL);
    await user.paste(passwordInput, PASS);

    expect(screen.findByText(EXPECTED_EMAIL)).not.toBeNull();
    expect(screen.findByText(EXPECTED_PASS)).not.toBeNull();

    await act(() => {
      fireEvent.press(screen.getByText("Submit"));
    });

    expect(screen).toHavePathname("/"); // user does not go to home screen
  });
});
