import { fireEvent, render, screen } from "@testing-library/react-native";

import IconButton from "@/components/IconButton";

describe("IconButton", () => {
  it(`should:
        - call mockFn when it is pressed`, async () => {
    const mockFn = jest.fn();
    render(
      <IconButton
        testID="icon-button"
        icon="chevron-left"
        onPress={mockFn}
      />
    );

    expect(screen.getByTestId("icon-button")).not.toBeNull();

    fireEvent.press(screen.getByTestId("icon-button"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
