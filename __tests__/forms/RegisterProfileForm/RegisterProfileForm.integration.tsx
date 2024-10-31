import { faker } from "@faker-js/faker";
import { fireEvent, waitFor } from "@testing-library/react-native";
import { act, renderRouter, screen } from "expo-router/testing-library";

import { fireBlurEvent } from "@/__mocks__/test-utils";
import RegisterForm from "@/forms/RegisterForm";
import api from "@/lib/api";
import countries from "@/utils/data/countries";
import Providers from "@/utils/providers";
import * as tokenFns from "@/utils/token";

jest.mock("@/lib/api");
const mockedApi = api as jest.Mocked<typeof api>;

describe("RegisterForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`should:
      - Enter valid data for the relevant form fields
      - Make a call to api.post which for updating the profile
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

    fireEvent.changeText(
      screen.getByText("First Name"),
      faker.person.firstName()
    );
    fireEvent.changeText(
      screen.getByText("Last Name"),
      faker.person.lastName()
    );
    fireEvent.changeText(screen.getByText("City"), faker.location.city());
    fireEvent.changeText(
      screen.getByText("Country"),
      faker.helpers.arrayElement(countries).Code
    );
    fireEvent.changeText(screen.getByText("Email"), faker.internet.email());
    fireEvent.press(screen.getByTestId("RegisterProfileForm:TermsAgreed"));

    mockedApi.post.mockResolvedValueOnce({ data: { success: true } });
    mockedApi.post.mockResolvedValueOnce({ data: MOCK_TOKEN });

    await act(() => {
      fireEvent.press(screen.getByText("Submit"));
    });

    await waitFor(() => {
      expect(tokenSpy).toHaveBeenCalledWith(MOCK_TOKEN);
      expect(screen).toHavePathname("/public-profile");
    });
  });

  it(`should:
    - Enter an empty first name
    - Enter an empty last name
    - Display the first_name error message
    - Display the last_name error message
    - Not allow submitting of form
    `, async () => {
    const FIRST_NAME = "";
    const LAST_NAME = "";

    const EXPECTED_FIRST_NAME = `"First_name" is not allowed to be empty`;
    const EXPECTED_LAST_NAME = `"Last_name" is not allowed to be empty`;

    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <RegisterForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");

    await fireBlurEvent(screen.getByTestId("RegisterForm:LastName"), LAST_NAME);

    expect(await screen.findByText(EXPECTED_FIRST_NAME)).not.toBeNull();
    expect(await screen.findByText(EXPECTED_LAST_NAME)).not.toBeNull();

    await act(() => {
      fireEvent.press(screen.getByText("Submit"));
    });

    expect(screen).not.toHavePathname("/home");
  });
});
