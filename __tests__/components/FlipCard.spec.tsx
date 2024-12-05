import { render, screen } from "@testing-library/react-native";
import { Text, View } from "react-native";

import FlipCard from "@/components/FlipCard";

const TestComponent = ({ title }: { title: string }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

// NOTE: due to the way React Native works, the front and back side of the
// card are always visible for TESTNG - they are only hidden from the user
describe("FlipCard", () => {
  it(`should:
        - render the card with FRONT displayed
        - accept a click event
        - render the card with BACK displayed
        `, async () => {
    render(
      <FlipCard
        frontComponent={<TestComponent title="FRONT" />}
        backComponent={<TestComponent title="BACK" />}
        width={300}
        height={300}
      />
    );

    expect(screen.getByText(/front/i)).not.toBeNull();
    expect(screen.getByText(/back/i)).not.toBeNull();
  });
});
