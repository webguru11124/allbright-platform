import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  userEvent,
  act,
} from "@testing-library/react-native";
import Picker from "@/forms/components/Picker/index.web";
import { pickerAdaptor as items } from "@/utils/data/industries";
import Providers from "@/utils/providers";

describe("Picker (Web)", () => {
  const mockOnValueChange = jest.fn();
  const mockOnBlur = jest.fn();

  it.skip("renders correctly and handles selection", async () => {
    const { getByText, getByTestId } = render(
      <Providers>
        <Picker
          label="label"
          selectedValue={{} as any}
          placeholder="Select Industry"
          onValueChange={mockOnValueChange}
          onBlur={mockOnBlur}
          items={items}
          testID="picker"
          error={undefined}
        />
      </Providers>
    );

    const picker = getByTestId("picker");
    await act(() => userEvent.press(picker));
    const item = getByText(items[0].label);
    await waitFor(() => expect(item).toBeTruthy());
    fireEvent.press(item);

    expect(mockOnValueChange).toHaveBeenCalledWith(items[0].value, 0);
    expect(getByText("label")).toBeTruthy();
  });

  it("displays error message", () => {
    const { getByText } = render(
      <Providers>
        <Picker
          label=""
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
