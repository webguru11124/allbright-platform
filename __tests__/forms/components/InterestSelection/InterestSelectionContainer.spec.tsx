import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import InterestsSection from "@/forms/components/InterestsSelection";
import Providers from "@/utils/providers";
import { ReactTestInstance } from "react-test-renderer";
import { interests } from "@/utils/data/interests";

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

  function selectInterest(interest: ReactTestInstance, expectation: string[]) {
    fireEvent.press(interest);
    expect(updateFieldMock).toHaveBeenCalledWith(expectation);
  }

  it("should select and deselect interests", () => {
    renderComponent();

    const interest1 = screen.getByTestId(`interests-checkbox-${interests[0]}`);
    const interest2 = screen.getByTestId(`interests-checkbox-${interests[1]}`);

    selectInterest(interest1, [interests[0]]);

    selectInterest(interest2, [interests[0], interests[1]]);

    selectInterest(interest1, [interests[1]]);
  });
});
