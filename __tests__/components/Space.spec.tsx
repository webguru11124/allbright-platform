import { render } from "@testing-library/react-native";
import { View } from "react-native";
import Space from "@/components/Space";

describe("Space", () => {
  it(`should:
        - not throw an error when rendering`, async () => {
    render(
      <View>
        <Space
          height={50}
          width={50}
        />
      </View>
    );
  });
});
