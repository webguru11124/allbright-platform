import { act, fireEvent, screen, waitFor } from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";

import PledgeFormContainer from "@/forms/PledgeForm";
import api from "@/lib/api";
import UserClient from "@/utils/client/user/UserClient";
import Providers from "@/utils/providers";

jest.mock("@/lib/api");
jest.mock("@/utils/client/user/UserClient");

jest.mock("@/utils/token", () => ({
  getUserId: jest.fn(),
}));
const mockedApi = api as jest.Mocked<typeof api>;

describe("PledgeForm", () => {
  beforeEach(() => {
    jest.spyOn(jest.requireMock("@/utils/token"), "getUserId").mockResolvedValue("mock-user-id");
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it(`Should:
          - Check agreement checkbox
          - Make a call to api.post which update user profile
          - Navigate to the complete route
          `, async () => {
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <PledgeFormContainer />
        </Providers>
      )),
    });
    expect(screen).toHavePathname("/");
    fireEvent.press(screen.getByTestId("PledgeForm:AgreedToPledge"));

    mockedApi.post.mockResolvedValueOnce({});
    await act(async () => {
      fireEvent.press(screen.getByTestId("PledgeForm:Submit"));
    });

    await waitFor(() => {
      expect(UserClient.prototype.updateUser).toHaveBeenCalledWith("mock-user-id", {
        agreedToPledge: true,
      });
      expect(screen).toHavePathname("/onboarding/complete");
    });
  });
  it(`should:
          - Press submit button
          - Display error message`, async () => {
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <PledgeFormContainer />
        </Providers>
      )),
    });
    expect(screen).toHavePathname("/");
    fireEvent.press(screen.getByTestId("PledgeForm:Submit"));
    expect(screen.getByText(`"AgreedToPledge" is required`)).toBeTruthy();
  });
});
