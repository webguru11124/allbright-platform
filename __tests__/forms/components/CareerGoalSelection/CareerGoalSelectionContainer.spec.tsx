import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

import CareerGoalsSelectionContainer from "@/forms/components/CareerGoalsSelection";
import allCareerGoals, { CareerGoalType } from "@/utils/data/careerGoals";
import Providers from "@/utils/providers";

describe("CareerGoalsSelectionContainer", () => {
  const updateFieldMock = jest.fn();
  const renderComponent = () =>
    render(
      <Providers>
        <CareerGoalsSelectionContainer updateField={updateFieldMock} />
      </Providers>
    );

  beforeEach(() => {
    updateFieldMock.mockClear();
  });

  function selectGoal(careerGoal: CareerGoalType, expectation: CareerGoalType[]) {
    const goal = screen.getByTestId(`interests-checkbox-${careerGoal.title}`);
    fireEvent.press(goal);
    expect(updateFieldMock).toHaveBeenCalledWith(expectation);
  }

  it("should not allow selecting more than 6 goals", () => {
    renderComponent();

    selectGoal(allCareerGoals[0], [allCareerGoals[0]]);
    selectGoal(allCareerGoals[1], [allCareerGoals[0], allCareerGoals[1]]);
    selectGoal(allCareerGoals[2], [allCareerGoals[0], allCareerGoals[1], allCareerGoals[2]]);
    selectGoal(allCareerGoals[3], [allCareerGoals[0], allCareerGoals[1], allCareerGoals[2], allCareerGoals[3]]);
    selectGoal(allCareerGoals[4], [
      allCareerGoals[0],
      allCareerGoals[1],
      allCareerGoals[2],
      allCareerGoals[3],
      allCareerGoals[4],
    ]);
    selectGoal(allCareerGoals[5], [
      allCareerGoals[0],
      allCareerGoals[1],
      allCareerGoals[2],
      allCareerGoals[3],
      allCareerGoals[4],
      allCareerGoals[5],
    ]);
    selectGoal(allCareerGoals[6], [
      allCareerGoals[0],
      allCareerGoals[1],
      allCareerGoals[2],
      allCareerGoals[3],
      allCareerGoals[4],
      allCareerGoals[5],
    ]);
  });
});
