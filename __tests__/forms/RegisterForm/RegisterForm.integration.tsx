import { faker } from "@faker-js/faker";
import { fireEvent, waitFor } from "@testing-library/react-native";
import { act, renderRouter, screen } from "expo-router/testing-library";

import { fireBlurEvent } from "@/__mocks__/test-utils";
import useRegisterPageSelection, { viewMode } from "@/forms/hooks/useRegisterPageSelection";
import RegisterForm from "@/forms/RegisterForm";
import api from "@/lib/api";
import Providers from "@/utils/providers";

jest.mock("@/lib/api");
const mockedApi = api as jest.Mocked<typeof api>;

jest.mock("@/forms/hooks/useRegisterPageSelection");

const mockUseRegisterPageSelection = jest.mocked(useRegisterPageSelection);

mockUseRegisterPageSelection.mockImplementation(() => ["EMAIL_PASSWORD", jest.fn() as (mode: viewMode) => void]);

describe.skip("RegisterForm", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`should:
      - Enter valid data for the relevant form fields
      - Make a call to api.post which returns a bearer token
      - Call the setToken function
      - Navigate to the '/onboarding/register-profile' route
      `, async () => {
    const MOCK_TOKEN = "my-bearer-token";

    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <RegisterForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");

    const PASSWORD = faker.internet.password();

    fireEvent.changeText(screen.getByText("Email"), faker.internet.email());

    fireEvent.changeText(screen.getByText("Password"), PASSWORD);
    fireEvent.changeText(screen.getByText("Confirm Password"), PASSWORD);
    fireEvent.changeText(screen.getByText("Email"), faker.internet.email());

    mockedApi.post.mockResolvedValueOnce({ data: { success: true } });
    mockedApi.post.mockResolvedValueOnce({ data: MOCK_TOKEN });

    await act(() => {
      fireEvent.press(screen.getByText("Submit"));
    });

    await waitFor(() => {
      expect(screen).toHavePathname("/onboarding/welcome");
    });
  });

  it(`should:
    - Enter an incorrectly formatted email address
    - Enter a password that isn't long enough
    - Display the email error message
    - Display the password error message
    - Not allow submitting of form
    `, async () => {
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <RegisterForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");

    const EMAIL = "not-an-email-address";
    const PASS = "123";

    const EXPECTED_EMAIL = `"Email" must be a valid email`;
    const EXPECTED_PASS = `"Password" length must be at least 4 characters long`;

    await fireBlurEvent(screen.getByTestId("RegisterForm:Email"), EMAIL);
    await fireBlurEvent(screen.getByTestId("RegisterForm:Password"), PASS);

    expect(await screen.findByText(EXPECTED_EMAIL)).not.toBeNull();
    expect(await screen.findByText(EXPECTED_PASS)).not.toBeNull();

    await act(() => {
      fireEvent.press(screen.getByText("Submit"));
    });

    expect(screen).not.toHavePathname("/home");
  });

  it(`should:
    - Enter a valid password
    - Enter a different value for password_confirmation
    - Display the password confirmation error message
    `, async () => {
    const PASS = faker.internet.password({ prefix: "pass_" });
    const PASS_CONF = faker.internet.password({ prefix: "conf_" });
    const EXPECTED_PASSWORD_CONF_ERROR = `"Password Confirmation" and "Password" should match`;

    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <RegisterForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");

    await fireBlurEvent(screen.getByTestId("RegisterForm:Password"), PASS);
    await fireBlurEvent(screen.getByTestId("RegisterForm:PasswordConfirmation"), PASS_CONF);

    expect(await screen.findByText(EXPECTED_PASSWORD_CONF_ERROR)).not.toBeNull();

    await act(() => {
      fireEvent.press(screen.getByText("Submit"));
    });

    expect(screen).not.toHavePathname("/home");
  });
});
