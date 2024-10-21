import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

import CareerGoalsSelectionContainer from "@/forms/components/CareerGoalsSelection";
import Providers from "@/utils/providers";
import allCareerGoals, { CareerGoalType } from "@/utils/data/careerGoals";

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

    function selectGoal(careerGoal: CareerGoalType, expectation: string[]) {
        const goal = screen.getByTestId(`interests-checkbox-${careerGoal.title}`);
        fireEvent.press(goal);
        expect(updateFieldMock).toHaveBeenCalledWith(expectation);
    }

    it("should not allow selecting more than 6 goals", () => {
        renderComponent();

        selectGoal(allCareerGoals[0], [allCareerGoals[0].id]);
        selectGoal(allCareerGoals[1], [allCareerGoals[0].id, allCareerGoals[1].id]);
        selectGoal(allCareerGoals[2], [allCareerGoals[0].id, allCareerGoals[1].id, allCareerGoals[2].id]);
        selectGoal(allCareerGoals[3], [allCareerGoals[0].id,
        allCareerGoals[1].id,
        allCareerGoals[2].id, allCareerGoals[3].id]);
        selectGoal(allCareerGoals[4], [allCareerGoals[0].id,
        allCareerGoals[1].id,
        allCareerGoals[2].id, allCareerGoals[3].id,
        allCareerGoals[4].id]);
        selectGoal(allCareerGoals[5], [allCareerGoals[0].id,
        allCareerGoals[1].id,
        allCareerGoals[2].id, allCareerGoals[3].id,
        allCareerGoals[4].id, allCareerGoals[5].id]);
        selectGoal(allCareerGoals[6], [allCareerGoals[0].id,
        allCareerGoals[1].id,
        allCareerGoals[2].id, allCareerGoals[3].id,
        allCareerGoals[4].id, allCareerGoals[5].id]);
    });
});
