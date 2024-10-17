import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react-native";

import RecommendationArticle from "@/components/recommendation_cards/RecommendationArticle";

describe("RecommendationArticle", () => {
  const articleData = {
    author: "Author",
    category: "articles",
    description: "",
    heroImage: {
      image: {
        title: "",
        url: "",
      },
    },
    id: "",
    name: "",
    sys: {
      id: "",
      firstPublishedAt: 0,
    },
    title: "Title",
    topic: "",
    url: "",
  };

  it("renders correct article data", () => {
    render(<RecommendationArticle {...articleData} />);

    expect(screen.getByText(articleData.title)).toBeInTheDocument();
    expect(screen.getByText(articleData.author)).toBeInTheDocument();
  });
});
