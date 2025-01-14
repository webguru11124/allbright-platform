import { act, render } from "@testing-library/react-native";
import React from "react";

import MemberLoading, { defaultTexts } from "@/features/Member/components/MemberLoading";
import useTheme from "@/hooks/useTheme";

jest.mock("@/hooks/useTheme");

describe("MemberLoading", () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({
      colors: {
        headerText: "#000",
      },
    });
  });

  it("should display one of the default texts initially", () => {
    const { queryByText } = render(<MemberLoading />);
    const initialText = defaultTexts.some((text) => queryByText(text));
    expect(initialText).toBeTruthy();
  });

  it("should change text after animation", () => {
    jest.useFakeTimers();
    const { queryByText } = render(<MemberLoading />);
    const initialText = defaultTexts.some((text) => queryByText(text));
    expect(initialText).toBeTruthy();

    act(() => {
      jest.advanceTimersByTime(6000); // Advance time to trigger animation
    });

    const newText = defaultTexts.some((text) => queryByText(text));
    expect(newText).toBeTruthy();
  });
});
