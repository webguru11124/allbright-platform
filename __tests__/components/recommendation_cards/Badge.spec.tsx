import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react-native";

import Badge from "@/components/recommendation_cards/Badge";

describe("Badge", () => {
  const badgeData = {
    colour: "black",
    text: "Text",
    textColour: "white",
  };

  it("renders badge", () => {
    render(
      <Badge
        colour={badgeData.colour}
        text={badgeData.text}
        textColour={badgeData.textColour}
      />
    );
    expect(screen.getByText(badgeData.text)).toBeTruthy();
  });
});
