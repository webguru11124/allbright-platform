import { faker } from "@faker-js/faker";
import { act, fireEvent, renderRouter, screen, waitFor } from "expo-router/testing-library";

import { fireBlurEvent } from "@/__mocks__/test-utils";
import RegisterProfileForm from "@/forms/RegisterProfileForm";
import api from "@/lib/api";
import UserClient from "@/utils/client/user/UserClient";
import countries from "@/utils/data/countries";
import Providers from "@/utils/providers";

jest.mock("@/lib/api");
jest.mock("@/utils/client/user/UserClient");
const mockedApi = api as jest.Mocked<typeof api>;

describe("RegisterProfileForm", () => {
  beforeEach(async () => {
    (UserClient.prototype.findUserById as jest.Mock).mockResolvedValue({});
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <RegisterProfileForm />
        </Providers>
      )),
    });

    await waitFor(() => expect(screen).toHavePathname("/"));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`should:
      - Enter valid data for the relevant form fields
      - Make a call to api.post which for updating the profile
      `, async () => {
    const randomCountry = faker.helpers.arrayElement(countries).Code;
    const randomCity = faker.location.city();
    const randomFirstName = faker.person.firstName();
    const randomLastName = faker.person.lastName();
    expect(screen.getByTestId("RegisterProfileForm:FirstName")).not.toBeNull();
    fireEvent.changeText(screen.getByTestId("RegisterProfileForm:FirstName"), randomFirstName);

    fireEvent.changeText(screen.getByTestId("RegisterProfileForm:LastName"), randomLastName);
    fireEvent.changeText(screen.getByText("Country"), randomCountry);
    fireEvent.changeText(screen.getByText("City"), randomCity);
    fireEvent.press(screen.getByTestId("RegisterProfileForm:TermsAgreed"));
    fireEvent.press(screen.getByTestId("RegisterProfileForm:MarketingAgreed"));
    fireEvent.press(screen.getByTestId("RegisterProfileForm:ThirdPartyAgreed"));

    mockedApi.post.mockResolvedValueOnce({ data: { success: true } });

    await act(async () => {
      fireEvent.press(screen.getByTestId("RegisterProfileForm:Submit"));
    });

    await waitFor(() => {
      expect(UserClient.prototype.updateUser).toHaveBeenCalledWith({
        firstName: randomFirstName,
        lastName: randomLastName,
        country: randomCountry,
        city: randomCity,
      });
      expect(screen).toHavePathname("/onboarding/public-profile");
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

    const EXPECTED_FIRST_NAME = `"FirstName" is  not allowed to be empty`;
    const EXPECTED_LAST_NAME = `"LastName" is not allowed to be empty`;

    await fireBlurEvent(screen.getByTestId("RegisterProfileForm:FirstName"), FIRST_NAME);
    await fireBlurEvent(screen.getByTestId("RegisterProfileForm:LastName"), LAST_NAME);
    expect(await screen.findByText(EXPECTED_FIRST_NAME)).not.toBeNull();
    expect(await screen.findByText(EXPECTED_LAST_NAME)).not.toBeNull();

    await act(() => {
      fireEvent.press(screen.getByText("Next"));
    });

    expect(screen).not.toHavePathname("/onboarding/public-profile");
  });
});
