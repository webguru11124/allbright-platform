import { faker } from "@faker-js/faker";
import { act, fireEvent, } from "@testing-library/react-native";
import { renderRouter, screen, waitFor } from "expo-router/testing-library";
import * as ImagePicker from "expo-image-picker";

import PublicProfileForm from "@/forms/PublicProfileForm";
import api from "@/lib/api";
import Providers from "@/utils/providers";
import { onboardingIndustries } from "@/utils/data/industries";
import { jobLevels } from "@/utils/data/jobLevels";
import goals from "@/utils/data/goals";
import UserClient from "@/utils/client/user/UserClient";
import { fireBlurEvent } from "@/__mocks__/test-utils";

jest.mock("@/lib/api");
jest.mock("@/utils/client/user/UserClient");
const mockedApi = api as jest.Mocked<typeof api>;

jest.mock("expo-image-picker", () => ({
  launchImageLibraryAsync: jest.fn(),
}));

describe("PublicProfileForm", () => {
  beforeEach(() => {
    (ImagePicker.launchImageLibraryAsync as jest.Mock).mockResolvedValueOnce({
      canceled: false,
      assets: [{ uri: "image-uri" }],
    });
    jest.clearAllMocks();
  });

  it(`should:
      - Enter valid data for the relevant form fields
      - Make a call to api.post which update user profile
      - Navigate to the second onboarding route
      `, async () => {
    (UserClient.prototype.updateUserImage as jest.Mock).mockResolvedValueOnce(
      "image-uri"
    );
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <PublicProfileForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");
    const randomCity = faker.location.city();
    const randomIndustry = onboardingIndustries[0];
    const randomJobLevel = jobLevels[0];
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

    fireEvent.press(
      screen.getByTestId("ProfilePhotoUploadSection:ArrowButton")
    );
    mockedApi.post.mockResolvedValueOnce({});
    await act(() =>
      fireEvent.press(
        screen.getByTestId("ProfilePhotoUploadSection:ArrowButton")
      )
    );
    // Check that the button is not disabled before API call
    const submitButton = screen.getByTestId("PublicProfileForm:Submit");
    await act(() => fireEvent.press(submitButton));

    await waitFor(() => {
      expect(UserClient.prototype.updateUserImage).toHaveBeenCalledWith(
        "image-uri"
      );
      expect(UserClient.prototype.updateUser).toHaveBeenCalledWith({
        city: randomCity,
        jobTitle: randomJobTitle,
        jobLevel: randomJobLevel,
        jobIndustry: randomIndustry,
        jobCompany: randomCompanyName,
        bio: randomBiography,
        goals: [randomGoals[0], randomGoals[1], randomGoals[2]],
        imageSrc: "image-uri",
      });
      expect(screen).toHavePathname("/onboarding/private-profile");
    });
  });

  it(`should:
    - Enter an empty city name
    - Enter an empty industry name
    - Enter an empty job level
    - Enter an empty company name
    - Enter an empty job title
    - Enter an incorrectly formatted email address
    - Enter a password that isn't long enough
    - Display the first_name error message
    - Display the last_name error message
    - Display the email error message
    - Display the password error message
    - Not allow submitting of form
    `, async () => {
    const JOB_TITLE = "";

    const EXPECTED_JOB_TITLE = `Please enter a job title`;

    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <PublicProfileForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");

    await fireBlurEvent(
      screen.getByTestId("PublicProfileForm:JobTitle"),
      JOB_TITLE
    );

    expect(await screen.findByText(EXPECTED_JOB_TITLE)).not.toBeNull();
    await act(() => {
      fireEvent.press(screen.getByTestId("PublicProfileForm:Submit"));
    });
    expect(UserClient.prototype.updateUser).not.toHaveBeenCalled();
    expect(screen).not.toHavePathname("/onboarding/private-profile");
  });
});
