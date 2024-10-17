import React from "react";
import Picker from "@/forms/components/Picker/index";
import { pickerAdaptor as items } from "@/utils/data/industries";
import Providers from "@/utils/providers";
import { render } from "@testing-library/react-native";

describe("Picker (Web)", () => {
  const mockOnValueChange = jest.fn();
  const mockOnBlur = jest.fn();

  it("displays error message", () => {
    const { getByText } = render(
      <Providers>
        <Picker
          selectedValue={{} as any}
          placeholder="Select Industry"
          onValueChange={mockOnValueChange}
          onBlur={mockOnBlur}
          items={items}
          error="This is an error"
        />
      </Providers>
    );

    expect(getByText("This is an error")).toBeTruthy();
  });
});
