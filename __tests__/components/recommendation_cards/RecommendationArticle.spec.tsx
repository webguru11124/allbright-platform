import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react-native";

import RecommendationArticle from "@/components/recommendation_cards/RecommendationArticle";
import { articleTestData } from "./RecommendationCard.spec";

describe("RecommendationArticle", () => {
  it("renders correct article data", () => {
    render(<RecommendationArticle {...articleTestData} />);
    expect(screen.getByText(articleTestData.title)).toBeTruthy();
    expect(screen.getByText(`By ${articleTestData.author}`)).toBeTruthy();
  });
});
