import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react-native";

import RecommendationEvent from "@/components/recommendation_cards/RecommendationEvent";
import { eventTestData } from "./RecommendationCard.spec";

describe("RecommendationEvent", () => {
  it("renders correct event data", () => {
    render(<RecommendationEvent {...eventTestData} />);
    expect(screen.getByText(eventTestData.title)).toBeTruthy();
    expect(
      screen.getByText(`${eventTestData.location} • Oct 23rd`)
    ).toBeTruthy();
    expect(screen.getByText(eventTestData.description)).toBeTruthy();
  });
});
