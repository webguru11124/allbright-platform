import "@testing-library/jest-dom";

import { render } from "@testing-library/react-native";
import React from "react";

import Divider from "@/components/recommendation_cards/Divider";

describe("Divider", () => {
  const dividerData = {
    colour: "black",
  };

  it("renders divider", () => {
    render(<Divider colour={dividerData.colour} />);
  });
});
