import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react-native";

import RecommendationMentorship from "@/components/recommendation_cards/RecommendationMentorship";
import { mentorshipTestData } from "./RecommendationCard.spec";

describe("RecommendationMentorship", () => {
  it("renders correct event data", () => {
    render(<RecommendationMentorship {...mentorshipTestData} />);
    expect(screen.getByText(mentorshipTestData.firstName)).toBeTruthy();
    expect(screen.getByText(mentorshipTestData.lastName)).toBeTruthy();
    expect(screen.getByText(mentorshipTestData.jobTitle)).toBeTruthy();
  });
});
