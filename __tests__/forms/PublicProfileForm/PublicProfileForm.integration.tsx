import { faker } from "@faker-js/faker";
import { act, fireEvent } from "@testing-library/react-native";
import * as ImagePicker from "expo-image-picker";
import { renderRouter, screen, waitFor } from "expo-router/testing-library";

import { fireBlurEvent } from "@/__mocks__/test-utils";
import PublicProfileForm from "@/forms/PublicProfileForm";
import api from "@/lib/api";
import UserClient from "@/utils/client/user/UserClient";
import goals from "@/utils/data/goals";
import { onboardingIndustries } from "@/utils/data/industries";
import { jobLevels } from "@/utils/data/jobLevels";
import Providers from "@/utils/providers";

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
    (UserClient.prototype.findUserById as jest.Mock).mockResolvedValue({});
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

    await waitFor(() => {
      expect(screen.getByText("Job Level")).not.toBeNull();
    });

    const randomIndustry = onboardingIndustries[0];
    const randomJobLevel = jobLevels[0];
    const randomCompanyName = faker.company.name();
    const randomJobTitle = faker.person.jobTitle();
    const randomBiography = faker.lorem.sentences(5);
    const randomGoals = goals.slice(0, 3);

    fireEvent.changeText(screen.getByText("Job Level"), randomJobLevel);
    fireEvent.changeText(screen.getByText("Industry"), randomIndustry);
    fireEvent.changeText(screen.getByText("Job title*"), randomJobTitle);
    fireEvent.changeText(
      screen.getByTestId("PublicProfileForm:CompanyName"),
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
      expect(UserClient.prototype.updateUser).toHaveBeenCalledWith({
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
    - Enter an empty job title
    - Showing Error message
    - Not allowing making api request
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

    await waitFor(() => {
      expect(screen.getByText("Job Level")).not.toBeNull();
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

  it(`should: 
    - Press submit button
    - Show error message
    - Not allowing making api request)
    `, async () => {
    const JOB_TITLE_ERROR_MESSAGE = "Please enter a job title";
    const JOB_LEVEL_ERROR_MESSAGE = "Please pick a job level from the list";
    const INDUSTRY_ERROR_MESSAGE = "Please pick an industry from the list";
    const GOALS_ERROR_MESSAGE = "You must select at least one goal.";
    const BIO_ERROR_MESSAGE = "Biography is required";
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <PublicProfileForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");
    await act(() => {
      fireEvent.press(screen.getByTestId("PublicProfileForm:Submit"));
    });
    expect(await screen.findByText(JOB_TITLE_ERROR_MESSAGE)).not.toBeNull();
    expect(await screen.findByText(JOB_LEVEL_ERROR_MESSAGE)).not.toBeNull();
    expect(await screen.findByText(INDUSTRY_ERROR_MESSAGE)).not.toBeNull();
    expect(await screen.findByText(GOALS_ERROR_MESSAGE)).not.toBeNull();
    expect(await screen.findByText(BIO_ERROR_MESSAGE)).not.toBeNull();
    expect(UserClient.prototype.updateUser).not.toHaveBeenCalled();
    expect(screen).not.toHavePathname("/onboarding/private-profile");
  });
});
