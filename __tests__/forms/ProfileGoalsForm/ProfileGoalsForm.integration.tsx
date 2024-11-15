import { act, fireEvent, screen, waitFor } from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";

import ProfileGoalsFormContainer from "@/forms/ProfileGoalsForm";
import api from "@/lib/api";
import UserClient from "@/utils/client/user/UserClient";
import allCareerGoals, { CareerGoalType } from "@/utils/data/careerGoals";
import Providers from "@/utils/providers";

jest.mock("@/lib/api");
jest.mock("@/utils/client/user/UserClient");
const mockedApi = api as jest.Mocked<typeof api>;

describe("ProfileGoalsForm", () => {
  function selectGoal(careerGoal: CareerGoalType) {
    const goal = screen.getByTestId(`interests-checkbox-${careerGoal.title}`);
    fireEvent.press(goal);
  }
  beforeEach(async () => {
    (UserClient.prototype.getUserGoals as jest.Mock).mockResolvedValue([]);
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <ProfileGoalsFormContainer />
        </Providers>
      )),
    });
    expect(screen).toHavePathname("/");
    await waitFor(() => {
      expect(screen.getByTestId("ProfileGoalsForm:Submit")).not.toBeNull();
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it(`Should:
        - Enter valid data for the relevant form fields
        - Make a call to api.post which update user profile
        - Navigate to the pledge route
        `, async () => {
    selectGoal(allCareerGoals[0]);
    selectGoal(allCareerGoals[1]);
    selectGoal(allCareerGoals[2]);
    mockedApi.post.mockResolvedValueOnce({});
    await act(async () => {
      fireEvent.press(screen.getByTestId("ProfileGoalsForm:Submit"));
    });

    await waitFor(() => {
      expect(UserClient.prototype.updateUserGoals).toHaveBeenCalledWith([
        allCareerGoals[0],
        allCareerGoals[1],
        allCareerGoals[2],
      ]);
      expect(screen).toHavePathname("/onboarding/pledge");
    });
  });
  it(`should:
        - Select less 3 career goals
        - Press submit button
        - Display error message`, async () => {
    selectGoal(allCareerGoals[0]);
    mockedApi.post.mockResolvedValueOnce({});
    fireEvent.press(screen.getByTestId("ProfileGoalsForm:Submit"));
    expect(
      screen.getByText(`"CareerGoals" must contain at least 3 items`)
    ).toBeTruthy();
  });
});
