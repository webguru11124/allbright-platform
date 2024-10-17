import { faker } from "@faker-js/faker";
import { fireEvent, waitFor } from "@testing-library/react-native";
import { act, renderRouter, screen } from "expo-router/testing-library";
import { fireBlurEvent } from "@/__mocks__/test-utils";
import RegisterForm from "@/forms/RegisterForm";
import api from "@/lib/api";
import Providers from "@/utils/providers";
import * as tokenFns from "@/utils/token";
import countries from "@/utils/data/countries";

jest.mock("@/lib/api");
const mockedApi = api as jest.Mocked<typeof api>;

describe("RegisterForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`should:
      - Enter valid data for the relevant form fields
      - Make a call to api.post which returns a bearer token
      - Call the setToken function
      - Navigate to the '/home' route
      `, async () => {
    const MOCK_TOKEN = "my-bearer-token";
    const tokenSpy = jest.spyOn(tokenFns, "setToken");

    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <RegisterForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");

    const PASSWORD = faker.internet.password();

    fireEvent.changeText(
      screen.getByText("First Name"),
      faker.person.firstName()
    );
    fireEvent.changeText(
      screen.getByText("Last Name"),
      faker.person.lastName()
    );
    fireEvent.changeText(screen.getByText("Email"), faker.internet.email());
    fireEvent.changeText(screen.getByText("City"), faker.location.city());
    fireEvent.changeText(
      screen.getByText("Country"),
      faker.helpers.arrayElement(countries).Code
    );
    fireEvent.changeText(screen.getByText("Password"), PASSWORD);
    fireEvent.changeText(screen.getByText("Confirm Password"), PASSWORD);
    fireEvent.changeText(screen.getByText("Email"), faker.internet.email());
    fireEvent.press(screen.getByTestId("RegisterForm:TermsAgreed"));

    mockedApi.post.mockResolvedValueOnce({ data: { success: true } });
    mockedApi.post.mockResolvedValueOnce({ data: MOCK_TOKEN });

    await act(() => {
      fireEvent.press(screen.getByText("Submit"));
    });

    await waitFor(() => {
      expect(tokenSpy).toHaveBeenCalledWith(MOCK_TOKEN);
      expect(screen).toHavePathname("/home");
    });
  });

  it(`should:
    - Enter an empty first name
    - Enter an empty last name
    - Enter an incorrectly formatted email address
    - Enter a password that isn't long enough
    - Display the first_name error message
    - Display the last_name error message
    - Display the email error message
    - Display the password error message
    - Not allow submitting of form
    `, async () => {
    const FIRST_NAME = "";
    const LAST_NAME = "";
    const EMAIL = "not-an-email-address";
    const PASS = "123";

    const EXPECTED_FIRST_NAME = `"First_name" is not allowed to be empty`;
    const EXPECTED_LAST_NAME = `"Last_name" is not allowed to be empty`;
    const EXPECTED_EMAIL = `"Email" must be a valid email`;
    const EXPECTED_PASS = `"Password" length must be at least 4 characters long`;

    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <RegisterForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");

    await fireBlurEvent(
      screen.getByTestId("RegisterForm:FirstName"),
      FIRST_NAME
    );
    await fireBlurEvent(screen.getByTestId("RegisterForm:LastName"), LAST_NAME);
    await fireBlurEvent(screen.getByTestId("RegisterForm:Email"), EMAIL);
    await fireBlurEvent(screen.getByTestId("RegisterForm:Password"), PASS);

    expect(await screen.findByText(EXPECTED_FIRST_NAME)).not.toBeNull();
    expect(await screen.findByText(EXPECTED_LAST_NAME)).not.toBeNull();
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
    await fireBlurEvent(
      screen.getByTestId("RegisterForm:PasswordConfirmation"),
      PASS_CONF
    );

    expect(
      await screen.findByText(EXPECTED_PASSWORD_CONF_ERROR)
    ).not.toBeNull();

    await act(() => {
      fireEvent.press(screen.getByText("Submit"));
    });

    expect(screen).not.toHavePathname("/home");
  });
});
