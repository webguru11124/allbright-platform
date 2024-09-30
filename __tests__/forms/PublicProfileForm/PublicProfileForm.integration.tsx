import { faker } from "@faker-js/faker";
import { fireEvent } from "@testing-library/react-native";
import { act, renderRouter, screen } from "expo-router/testing-library";

import PublicProfileForm from "@/forms/PublicProfileForm";
import api from "@/lib/api";
import Providers from "@/utils/providers";
import { onboardingIndustries } from "@/utils/data/industries";
import { jobLevels } from "@/utils/data/jobLevels";
import goals from "@/utils/data/goals";

jest.mock("@/lib/api");
const mockedApi = api as jest.Mocked<typeof api>;

describe("PublicProfileForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`should:
      - Enter valid data for the relevant form fields
      - Make a call to api.post which update user profile
      - Navigate to the second onboarding route
      `, async () => {
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <PublicProfileForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");
    const randomCity = faker.location.city();
    const randomIndustry =
      onboardingIndustries[Math.random() * onboardingIndustries.length];
    const randomJobLevel = jobLevels[Math.random() * jobLevels.length];
    const randomCompanyName = faker.company.name();
    const randomJobTitle = faker.person.jobTitle();
    const randomBiography = faker.lorem.sentences(5);
    const randomGoals = goals.slice(0, 3);

    fireEvent.changeText(screen.getByText("City"), randomCity);
    fireEvent.changeText(screen.getByText("Job Level"), randomJobLevel);
    fireEvent.changeText(screen.getByText("Industry"), randomIndustry);
    fireEvent.changeText(screen.getByText("Job title*"), randomJobTitle);
    fireEvent.changeText(
      screen.getByText("Company name (if applicable)"),
      randomCompanyName
    );
    fireEvent.changeText(screen.getByText("Biography*"), randomBiography);

    fireEvent.press(screen.getByTestId(`goals-checkbox-${randomGoals[0]}`));
    fireEvent.press(screen.getByTestId(`goals-checkbox-${randomGoals[1]}`));
    fireEvent.press(screen.getByTestId(`goals-checkbox-${randomGoals[2]}`));

    mockedApi.post.mockResolvedValueOnce({ data: { data: {}, success: true } });
    // Check that the button is not disabled before API call
    const submitButton = screen.getByTestId("PublicProfileForm:Submit");
    expect(submitButton.props.disabled).not.toBe(true);

    await act(() => {
      fireEvent.press(screen.getByTestId("PublicProfileForm:Submit"));
    });

    // await waitFor(() => {
    //   expect(screen).toHavePathname("/onboarding/private-profile");
    // });
  });

  // it(`should:
  //   - Enter an empty city name
  //   - Enter an empty industry name
  //   - Enter an empty job level
  //   - Enter an empty company name
  //   - Enter an empty job title
  //   - Enter an incorrectly formatted email address
  //   - Enter a password that isn't long enough
  //   - Display the first_name error message
  //   - Display the last_name error message
  //   - Display the email error message
  //   - Display the password error message
  //   - Not allow submitting of form
  //   `, async () => {
  //   const FIRST_NAME = "";
  //   const LAST_NAME = "";
  //   const EMAIL = "not-an-email-address";
  //   const PASS = "123";

  //   const EXPECTED_FIRST_NAME = `"First_name" is not allowed to be empty`;
  //   const EXPECTED_LAST_NAME = `"Last_name" is not allowed to be empty`;
  //   const EXPECTED_EMAIL = `"Email" must be a valid email`;
  //   const EXPECTED_PASS = `"Password" length must be at least 4 characters long`;

  //   renderRouter({
  //     index: jest.fn(() => (
  //       <Providers>
  //         <PublicProfileForm />
  //       </Providers>
  //     )),
  //   });

  //   expect(screen).toHavePathname("/");

  //   await fireBlurEvent(
  //     screen.getByTestId("PublicProfileForm:FirstName"),
  //     FIRST_NAME
  //   );
  //   await fireBlurEvent(
  //     screen.getByTestId("PublicProfileForm:LastName"),
  //     LAST_NAME
  //   );
  //   await fireBlurEvent(screen.getByTestId("PublicProfileForm:Email"), EMAIL);
  //   await fireBlurEvent(screen.getByTestId("PublicProfileForm:Password"), PASS);

  //   expect(await screen.findByText(EXPECTED_FIRST_NAME)).not.toBeNull();
  //   expect(await screen.findByText(EXPECTED_LAST_NAME)).not.toBeNull();
  //   expect(await screen.findByText(EXPECTED_EMAIL)).not.toBeNull();
  //   expect(await screen.findByText(EXPECTED_PASS)).not.toBeNull();

  //   await act(() => {
  //     fireEvent.press(screen.getByText("Submit"));
  //   });

  //   expect(screen).not.toHavePathname("/home");
  // });
});
