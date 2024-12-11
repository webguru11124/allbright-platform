import { Text } from "react-native";

import { fireEvent, render, screen } from "@/__mocks__/test-utils";
import AnimatedPressable from "@/components/AnimatedPressable";

describe("AnimatedPressable", () => {
  describe("scaleOnHover", () => {
    it("should display children and register a click", () => {
      const TEXT = "Click Me!";
      const testFn = jest.fn();

      render(
        <AnimatedPressable
          type={"scaleOnHover"}
          onPress={testFn}>
          <Text>{TEXT}</Text>
        </AnimatedPressable>
      );

      fireEvent.press(screen.getByText(TEXT));

      expect(testFn).toHaveBeenCalled();
    });
  });
});
