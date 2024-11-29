import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react-native";
import React from "react";

import Badge from "@/components/recommendation_cards/Badge";

describe("Badge", () => {
  const badgeData = {
    backgroundColor: "black",
    text: "Text",
    color: "white",
  };

  it("renders badge", () => {
    render(
      <Badge
        backgroundColor={badgeData.backgroundColor}
        text={badgeData.text}
        color={badgeData.color}
      />
    );
    expect(screen.getByText(badgeData.text)).toBeTruthy();
  });
});
