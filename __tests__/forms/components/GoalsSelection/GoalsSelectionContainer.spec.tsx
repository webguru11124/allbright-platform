import React from "react";
import { render, screen, fireEvent } from "expo-router/testing-library";
import goals from "@/utils/data/goals";
import GoalsSectionContainer from "@/forms/components/GoalsSelection";
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

  it("should select and deselect goals", () => {
    renderComponent();

    const goal1 = screen.getByTestId(`goals-checkbox-${goals[0]}`);
    const goal2 = screen.getByTestId(`goals-checkbox-${goals[1]}`);

    // Select first goal
    fireEvent.press(goal1);
    expect(updateFieldMock).toHaveBeenCalledWith([goals[0]]);

    // Select second goal
    fireEvent.press(goal2);
    expect(updateFieldMock).toHaveBeenCalledWith([goals[0], goals[1]]);

    // Deselect first goal
    fireEvent.press(goal1);
    expect(updateFieldMock).toHaveBeenCalledWith([goals[1]]);
  });

  it("should not allow selecting more than 3 goals", () => {
    renderComponent();

    const goal1 = screen.getByTestId(`goals-checkbox-${goals[0]}`);
    const goal2 = screen.getByTestId(`goals-checkbox-${goals[1]}`);
    const goal3 = screen.getByTestId(`goals-checkbox-${goals[2]}`);
    const goal4 = screen.getByTestId(`goals-checkbox-${goals[3]}`);

    // Select first 3 goals
    fireEvent.press(goal1);
    fireEvent.press(goal2);
    fireEvent.press(goal3);
    expect(updateFieldMock).toHaveBeenCalledWith([
      goals[0],
      goals[1],
      goals[2],
    ]);

    // Try to select the fourth goal
    fireEvent.press(goal4);
    // Ensure the fourth goal is not added to the selection
    expect(updateFieldMock).not.toHaveBeenCalledWith([
      goals[0],
      goals[1],
      goals[2],
      goals[3],
    ]);
  });

  it("should show error when no goal is selected", () => {
    renderComponent();

    const goal1 = screen.getByTestId(`goals-checkbox-${goals[0]}`);

    // Deselect all goals
    fireEvent.press(goal1);
    fireEvent.press(goal1);
    expect(updateFieldMock).toHaveBeenCalledWith([]);

    // Simulate the error state (e.g., by passing an error prop)
    const errorMessage = screen.queryByText(/choose between 1 and to 3/i);
    expect(errorMessage).not.toBeNull(); // Assuming that this would be visible during error
  });
});
