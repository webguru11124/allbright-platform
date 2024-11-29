import "@testing-library/jest-dom";

import { render } from "@testing-library/react-native";
import React from "react";

import Divider from "@/components/recommendation_cards/Divider";

describe("Divider", () => {
  const dividerData = {
    color: "black",
  };

  it("renders divider", () => {
    render(<Divider color={dividerData.color} />);
  });
});
