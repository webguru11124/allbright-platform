import { faker } from "@faker-js/faker";
import { act, fireEvent } from "@testing-library/react-native";
import { renderRouter, screen, waitFor } from "expo-router/testing-library";

import { convertDateToInputString, parseDateString } from "@/__mocks__/test-utils";
import PrivateProfileForm from "@/forms/PrivateProfileForm";
import api from "@/lib/api";
import UserClient from "@/utils/client/user/UserClient";
import { ethnicGroups } from "@/utils/data/ethnicGroups";
import { interests } from "@/utils/data/interests";
import { jobStatus } from "@/utils/data/jobStatus";
import organisationSize from "@/utils/data/organisationSize";
import UKSalaries from "@/utils/data/salary";
import Providers from "@/utils/providers";

jest.mock("@/lib/api");
jest.mock("@/utils/client/user/UserClient");

const mockedApi = api as jest.Mocked<typeof api>;

describe("PrivateProfileForm", () => {
  function selectInterest(interest: string) {
    const interestElement = screen.getByTestId(`interests-checkbox-${interest}`);
    fireEvent.press(interestElement);
  }
  function selectEthnicGroup(ethnicGroup: string) {
    const checkbox = screen.getByTestId(`ethnic-group-option-${ethnicGroup}`);
    fireEvent.press(checkbox);
  }
  function changeBirthDate(date: string) {
    const dateOfBirth = screen.getByTestId("PrivateProfileForm:DateOfBirth");
    fireEvent.changeText(dateOfBirth, date);
  }

  beforeEach(async () => {
    jest.clearAllMocks();
    (UserClient.prototype.findUserById as jest.Mock).mockResolvedValue({});
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <PrivateProfileForm />
        </Providers>
      )),
    });

    expect(screen).toHavePathname("/");

    await waitFor(() => {
      expect(screen.getByText("Job status*")).not.toBeNull();
    });
  });
  it(`should:
      - Enter valid data for the relevant form fields
      - Make a call to api.post which update user profile
      - Navigate to the second onboarding route
      `, async () => {
    const randomInterests = faker.helpers.arrayElements(interests);
    const randomJobStatus = faker.helpers.arrayElement(jobStatus);
    const randomSalaryRange = faker.helpers.arrayElement(UKSalaries);
    const randomOrgnizationSize = faker.helpers.arrayElement(organisationSize);
    const randomeEthnicGroups = faker.helpers.arrayElements(ethnicGroups.slice(1, -1));
    const randomBirthDate = faker.date.birthdate();

    randomInterests.forEach((interest) => selectInterest(interest as string));
    randomeEthnicGroups.forEach((ethnicGroup) => selectEthnicGroup(ethnicGroup.title));

    fireEvent.changeText(screen.getByText("Job status*"), randomJobStatus);
    fireEvent.changeText(screen.getByText("Salary band"), randomSalaryRange);
    fireEvent.changeText(screen.getByText("Size of organization"), randomOrgnizationSize);
    const dateInput = convertDateToInputString(randomBirthDate);
    changeBirthDate(dateInput);

    mockedApi.post.mockResolvedValueOnce({});

    const submitButton = screen.getByTestId("PrivateProfileForm:Submit");
    await act(() => fireEvent.press(submitButton));

    await waitFor(() => {
      expect(UserClient.prototype.updateUser).toHaveBeenCalledWith({
        jobStatus: randomJobStatus,
        salary: randomSalaryRange,
        organisationSize: randomOrgnizationSize,
        interests: randomInterests,
        ethnicGroups: randomeEthnicGroups.map((e) => e.value),
        dateOfBirth: parseDateString(dateInput),
      });
      expect(screen).toHavePathname("/onboarding/profile-goals");
    });
  });

  it(`should: 
    - Press submit button
    - Show error message
    - Not allowing making api request)
    `, async () => {
    const INTERESTS_ERROR_MESSAGE = '"Interests" is required';
    const JOB_STATUS_ERROR_MESSAGER = '"JobStatus" is required';
    const DATEOF_BRITH_ERROR_MESSAGE = '"DateOfBirth" is required';

    await act(() => {
      fireEvent.press(screen.getByTestId("PrivateProfileForm:Submit"));
    });
    expect(await screen.findByText(INTERESTS_ERROR_MESSAGE)).not.toBeNull();
    expect(await screen.findByText(JOB_STATUS_ERROR_MESSAGER)).not.toBeNull();
    expect(await screen.findByText(DATEOF_BRITH_ERROR_MESSAGE)).not.toBeNull();

    expect(UserClient.prototype.updateUser).not.toHaveBeenCalled();
    expect(screen).not.toHavePathname("/onboarding/private-profile");
  });
});
