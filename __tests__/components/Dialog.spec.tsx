import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";

import Dialog from "@/components/Dialog";
import Providers from "@/utils/providers";

describe("Dialog", () => {
  const mockOnConfirmClick = jest.fn().mockResolvedValue(undefined);
  const mockOnCancelClick = jest.fn();

  const renderDialog = (props = {}) =>
    render(
      <Dialog
        title="Test Dialog"
        confirmLabel="Confirm"
        onConfirmClick={mockOnConfirmClick}
        cancelLabel="Cancel"
        onCancelClick={mockOnCancelClick}
        visible={true}
        {...props}>
        Dialog content
      </Dialog>,
      { wrapper: Providers }
    );

  it("should call onConfirmClick when clicking on the confirm button", async () => {
    const { getByText } = renderDialog();
    act(() => {
      fireEvent.press(getByText("Confirm"));
    });
    await waitFor(() => expect(mockOnConfirmClick).toHaveBeenCalled());
  });

  it("should display the correct title", () => {
    const { getByText } = renderDialog();
    expect(getByText("Test Dialog")).toBeTruthy();
  });

  it("should not call onCancelClick when clicking on the backdrop if disableBackdropClick is true", () => {
    const { getByTestId } = renderDialog({ disableBackdropClick: true });
    act(() => {
      fireEvent.press(getByTestId("backdrop"));
    });
    expect(mockOnCancelClick).not.toHaveBeenCalled();
  });

  it("should render the dialog content", () => {
    const { getByText } = renderDialog();
    expect(getByText("Dialog content")).toBeTruthy();
  });

  it("should not render the dialog when visible is false", () => {
    const { queryByText } = renderDialog({ visible: false });
    expect(queryByText("Test Dialog")).toBeNull();
  });
});
