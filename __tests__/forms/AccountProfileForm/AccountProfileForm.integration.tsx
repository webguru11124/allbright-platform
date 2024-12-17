import { faker } from "@faker-js/faker";
import { act, fireEvent } from "@testing-library/react-native";
import * as ImagePicker from "expo-image-picker";
import { renderRouter, screen, waitFor } from "expo-router/testing-library";

import { fireBlurEvent } from "@/__mocks__/test-utils";
import AccountProfileForm from "@/forms/AccountProfileForm";
import api from "@/lib/api";
import UserClient from "@/utils/client/user/UserClient";
import countries from "@/utils/data/countries";
import goals from "@/utils/data/goals";
import { onboardingIndustries } from "@/utils/data/industries";
import { interests } from "@/utils/data/interests";
import { jobLevels } from "@/utils/data/jobLevels";
import Providers from "@/utils/providers";

jest.mock("@/lib/api");
jest.mock("@/utils/client/user/UserClient");
const mockedApi = api as jest.Mocked<typeof api>;

jest.mock("expo-image-picker", () => ({
  launchImageLibraryAsync: jest.fn(),
}));

describe("AccountProfileForm", () => {
  function selectInterest(interest: string) {
    const interestElement = screen.getByTestId(`interests-checkbox-${interest}`);
    fireEvent.press(interestElement);
  }

  beforeEach(() => {
    (ImagePicker.launchImageLibraryAsync as jest.Mock).mockResolvedValue({
      canceled: false,
      assets: [{ uri: "image-uri" }],
    });
    (UserClient.prototype.findUserById as jest.Mock).mockResolvedValue({});
  });

  afterEach(() => {
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
          <AccountProfileForm />
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
    const randomCountry = faker.helpers.arrayElement(countries).Code;
    const randomCity = faker.location.city();
    const randomInterests = faker.helpers.arrayElements(interests);
    const randomInstagramHandle = "@" + faker.lorem.word();
    const randomWebsite = faker.internet.url();
    const randomLinkedIn = faker.internet.url();

    randomInterests.forEach((interest) => selectInterest(interest as string));

    fireEvent.changeText(screen.getByText("Country"), randomCountry);
    fireEvent.changeText(screen.getByText("City"), randomCity);
    fireEvent.changeText(screen.getByText("Job Level"), randomJobLevel);
    fireEvent.changeText(screen.getByText("Industry"), randomIndustry);
    fireEvent.changeText(screen.getByText("Job title*"), randomJobTitle);
    fireEvent.changeText(screen.getByTestId("AccountProfileForm:CompanyName"), randomCompanyName);
    fireEvent.changeText(screen.getByText("Biography*"), randomBiography);
    fireEvent.changeText(screen.getByText("Instagram (@yourhandle)"), randomInstagramHandle);
    fireEvent.changeText(screen.getByText("Website"), randomWebsite);
    fireEvent.changeText(screen.getByText("LinkedIn"), randomLinkedIn);

    fireEvent.press(screen.getByTestId(`goals-checkbox-${randomGoals[0]}`));
    fireEvent.press(screen.getByTestId(`goals-checkbox-${randomGoals[1]}`));
    fireEvent.press(screen.getByTestId(`goals-checkbox-${randomGoals[2]}`));

    fireEvent.press(screen.getByTestId("ProfilePhotoUploadSection:ArrowButton"));
    mockedApi.post.mockResolvedValueOnce({});
    await act(() => fireEvent.press(screen.getByTestId("ProfilePhotoUploadSection:ArrowButton")));
    // Check that the button is not disabled before API call
    const submitButton = screen.getByTestId("AccountProfileForm:Submit");

    await act(() => fireEvent.press(submitButton));

    await waitFor(() => {
      expect(UserClient.prototype.updateUser).toHaveBeenCalledWith({
        businessCardColour: undefined,
        country: randomCountry,
        city: randomCity,
        jobTitle: randomJobTitle,
        jobLevel: randomJobLevel,
        jobIndustry: randomIndustry,
        jobCompany: randomCompanyName,
        bio: randomBiography,
        goals: [randomGoals[0], randomGoals[1], randomGoals[2]],
        interests: randomInterests,
        imageSrc: undefined,
        instagram: randomInstagramHandle,
        linkedin: randomLinkedIn,
        website: randomWebsite,
      });
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
          <AccountProfileForm />
        </Providers>
      )),
    });

    await waitFor(() => {
      expect(screen.getByText("Job Level")).not.toBeNull();
    });

    expect(screen).toHavePathname("/");

    await fireBlurEvent(screen.getByTestId("AccountProfileForm:JobTitle"), JOB_TITLE);

    expect(await screen.findByText(EXPECTED_JOB_TITLE)).not.toBeNull();
    await act(() => {
      fireEvent.press(screen.getByTestId("AccountProfileForm:Submit"));
    });
    expect(UserClient.prototype.updateUser).not.toHaveBeenCalled();
  });

  it(`should: 
    - Press submit button
    - Show error message
    - Not allowing making api request)
    `, async () => {
    const COUNTRY = `Please pick a country from the list`;
    const CITY = `"City" is required`;
    const JOB_TITLE_ERROR_MESSAGE = "Please enter a job title";
    const JOB_LEVEL_ERROR_MESSAGE = "Please pick a job level from the list";
    const INDUSTRY_ERROR_MESSAGE = "Please pick an industry from the list";
    const GOALS_ERROR_MESSAGE = "You must select at least one goal.";
    const BIO_ERROR_MESSAGE = "Biography is required";
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <AccountProfileForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");
    await act(() => {
      fireEvent.press(screen.getByTestId("AccountProfileForm:Submit"));
    });
    expect(await screen.findByText(CITY)).not.toBeNull();
    expect(await screen.findByText(COUNTRY)).not.toBeNull();
    expect(await screen.findByText(JOB_TITLE_ERROR_MESSAGE)).not.toBeNull();
    expect(await screen.findByText(JOB_LEVEL_ERROR_MESSAGE)).not.toBeNull();
    expect(await screen.findByText(INDUSTRY_ERROR_MESSAGE)).not.toBeNull();
    expect(await screen.findByText(GOALS_ERROR_MESSAGE)).not.toBeNull();
    expect(await screen.findByText(BIO_ERROR_MESSAGE)).not.toBeNull();
    expect(UserClient.prototype.updateUser).not.toHaveBeenCalled();
  });
});
