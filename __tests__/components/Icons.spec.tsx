import { render } from "@testing-library/react-native";
import { View } from "react-native";
import { IconCamera, ArrowRight } from "@/components/Icons";

describe("IconCamera", () => {
  it(`should:
        - not throw an error when rendering`, async () => {
    render(
      <View>
        <IconCamera />
      </View>
    );
  });
});

describe("ArrowRight", () => {
  it(`should:
        - not throw an error when rendering`, async () => {
    render(
      <View>
        <ArrowRight />
      </View>
    );
  });
});
