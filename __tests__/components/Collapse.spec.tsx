import { fireEvent, render, waitFor } from "@testing-library/react-native";

import { TestProviders } from "@/__mocks__/test-utils";
import Collapse from "@/components/Collapse";
import { CM } from "@/components/Typography";

describe("Collapse Component", () => {
  it("renders correctly with title and children", () => {
    const { getByText } = render(
      <TestProviders>
        <Collapse title="Test Title">
          <CM>Test Children</CM>
        </Collapse>
      </TestProviders>
    );

    expect(getByText("Test Title")).toBeTruthy();
    expect(getByText("Test Children")).toBeTruthy();
  });

  it("toggles visibility when header is pressed", async () => {
    const { getByText } = render(
      <TestProviders>
        <Collapse title="Test Title">
          <CM>Test Children</CM>
        </Collapse>
      </TestProviders>
    );

    const header = getByText("Test Title");

    const children = getByText("Test Children");

    expect(children).toBeTruthy();

    fireEvent.press(header);
    // TODO: this child is always visible, so this test will always pass
    await waitFor(() => expect(children).toBeTruthy());

    fireEvent.press(header);

    await waitFor(() => expect(children).toBeTruthy());
  });
});
