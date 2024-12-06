import { useRouter } from "expo-router";
import { act, renderHook } from "expo-router/testing-library";
import { useContext } from "react";

import { useApprove } from "@/features/Onboarding/Complete/hooks/useApprove";

// Mock the dependencies
jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("useApprove", () => {
  const mockRefetch = jest.fn();
  const mockReplace = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });
    (useContext as jest.Mock).mockReturnValue({
      user: {},
      refetch: mockRefetch,
    });

    jest.clearAllMocks();
  });

  it("should call refetch and navigate to home when onClick is called", async () => {
    const { result } = renderHook(() => useApprove());

    await act(async () => {
      await result.current.onClick();
    });

    expect(mockRefetch).toHaveBeenCalledTimes(1);

    expect(mockReplace).toHaveBeenCalledWith("/home");
    expect(mockReplace).toHaveBeenCalledTimes(1);
  });
});
