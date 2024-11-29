import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

import InterestsSection from "@/forms/components/InterestsSelection";
import { interests } from "@/utils/data/interests";
import Providers from "@/utils/providers";

describe("InterestsSection", () => {
  const updateFieldMock = jest.fn();
  const renderComponent = () =>
    render(
      <Providers>
        <InterestsSection updateField={updateFieldMock} />
      </Providers>
    );

  beforeEach(() => {
    updateFieldMock.mockClear();
  });

  function selectInterest(interest: string, expectation: string[]) {
    const interestElement = screen.getByTestId(`interests-checkbox-${interest}`);
    fireEvent.press(interestElement);
    expect(updateFieldMock).toHaveBeenCalledWith(expectation);
  }

  it("should select and deselect interests", () => {
    renderComponent();

    selectInterest(interests[0], [interests[0]]);

    selectInterest(interests[1], [interests[0], interests[1]]);

    selectInterest(interests[0], [interests[1]]);
  });
});
