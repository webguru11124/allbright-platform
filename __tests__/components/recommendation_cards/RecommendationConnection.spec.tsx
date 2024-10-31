import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react-native";
import React from "react";

import RecommendationConnection from "@/components/recommendation_cards/RecommendationConnection";

import { connectionTestData } from "./RecommendationCard.spec";

describe("RecommendationConnection", () => {
  it("renders correct connection data", () => {
    render(<RecommendationConnection {...connectionTestData} />);
    expect(
      screen.getByText(
        `${connectionTestData.firstName} ${connectionTestData.lastName}`
      )
    ).toBeTruthy();
    expect(screen.getByText(connectionTestData.jobTitle)).toBeTruthy();
    expect(screen.getByText(connectionTestData.location)).toBeTruthy();
  });
});
