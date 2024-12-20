import { faker } from "@faker-js/faker";
import { fireEvent, waitFor } from "@testing-library/react-native";
import { act, renderRouter, screen } from "expo-router/testing-library";

import { fireBlurEvent } from "@/__mocks__/test-utils";
import LoginForm from "@/forms/LoginForm";
import api from "@/lib/api";
import Providers from "@/utils/providers";

jest.mock("@/lib/api");
const mockedApi = api as jest.Mocked<typeof api>;

// FIXME: Will not work with refetch
describe.skip("LoginForm", () => {
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

    mockedApi.post.mockResolvedValueOnce({ data: MOCK_TOKEN });

    await act(() => {
      fireEvent.press(screen.getByText("Submit"));
    });

    await waitFor(() => {
      expect(screen).toHavePathname("/home");
    });
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

    await fireBlurEvent(screen.getByTestId("LoginForm:Email"), EMAIL);
    await fireBlurEvent(screen.getByTestId("LoginForm:Password"), PASS);

    expect(await screen.findByText(EXPECTED_EMAIL)).not.toBeNull();
    expect(await screen.findByText(EXPECTED_PASS)).not.toBeNull();

    await act(() => {
      fireEvent.press(screen.getByText("Submit"));
    });

    expect(screen).not.toHavePathname("/home");
  });
});
