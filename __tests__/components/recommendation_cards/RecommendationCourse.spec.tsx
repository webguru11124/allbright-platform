import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react-native";

import RecommendationCourse from "@/components/recommendation_cards/RecommendationCourse";
import { courseTestData } from "./RecommendationCard.spec";

describe("RecommendationCourse", () => {
  it("renders correct course data", () => {
    render(<RecommendationCourse {...courseTestData} />);
    expect(screen.getByText(courseTestData.lessonName)).toBeTruthy();
    expect(
      screen.getByText(
        `On Demand • ${courseTestData.lessonActivitiesCollection.total} videos`
      )
    ).toBeTruthy();
    expect(
      screen.getByText(courseTestData.lessonIntroductionText)
    ).toBeTruthy();
  });
});
