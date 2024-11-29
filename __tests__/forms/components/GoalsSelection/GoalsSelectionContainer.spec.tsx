import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import { ReactTestInstance } from "react-test-renderer";

import GoalsSectionContainer from "@/forms/components/GoalsSelection";
import goals from "@/utils/data/goals";
import Providers from "@/utils/providers";

describe("GoalsSectionContainer", () => {
  const updateFieldMock = jest.fn();
  const renderComponent = () =>
    render(
      <Providers>
        <GoalsSectionContainer updateField={updateFieldMock} />
      </Providers>
    );

  beforeEach(() => {
    updateFieldMock.mockClear();
  });

  function selectGoal(goal: ReactTestInstance, expectation: string[]) {
    fireEvent.press(goal);
    expect(updateFieldMock).toHaveBeenCalledWith(expectation);
  }

  it("should select and deselect goals", () => {
    renderComponent();

    const goal1 = screen.getByTestId(`goals-checkbox-${goals[0]}`);
    const goal2 = screen.getByTestId(`goals-checkbox-${goals[1]}`);

    selectGoal(goal1, [goals[0]]);

    selectGoal(goal2, [goals[0], goals[1]]);

    selectGoal(goal1, [goals[1]]);
  });

  it("should not allow selecting more than 3 goals", () => {
    renderComponent();

    const goal1 = screen.getByTestId(`goals-checkbox-${goals[0]}`);
    const goal2 = screen.getByTestId(`goals-checkbox-${goals[1]}`);
    const goal3 = screen.getByTestId(`goals-checkbox-${goals[2]}`);
    const goal4 = screen.getByTestId(`goals-checkbox-${goals[3]}`);

    selectGoal(goal1, [goals[0]]);
    selectGoal(goal2, [goals[0], goals[1]]);
    selectGoal(goal3, [goals[0], goals[1], goals[2]]);

    fireEvent.press(goal4);
    expect(updateFieldMock).not.toHaveBeenCalledWith([goals[0], goals[1], goals[2], goals[3]]);
  });
});
