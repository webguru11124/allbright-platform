import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react-native";
import React from "react";

import RecommendationGroup from "@/components/recommendation_cards/RecommendationGroup";

import { groupTestData } from "./RecommendationCard.spec";

describe("RecommendationGroup", () => {
  it("renders correct event data", () => {
    render(<RecommendationGroup {...groupTestData} />);
    expect(screen.getByText(groupTestData.name)).toBeTruthy();
    expect(screen.getByText(groupTestData.description)).toBeTruthy();
  });
});
