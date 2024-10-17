import { render, screen } from "@testing-library/react-native";
import { View } from "react-native";
import * as Typography from "@/components/Typography";

describe.each([
  [Typography.H1, "H1"],
  [Typography.H2, "H2"],
  [Typography.H3, "H3"],
  [Typography.H4, "H4"],
  [Typography.H5, "H5"],
  [Typography.H6, "H6"],
  [Typography.H1Rox, "H1Rox"],
  [Typography.H2Rox, "H2Rox"],
  [Typography.H3Rox, "H3Rox"],
  [Typography.CXXL, "CXXL"],
  [Typography.CXL, "CXL"],
  [Typography.CL, "CL"],
  [Typography.CM, "CM"],
  [Typography.CS, "CS"],
])("Typography", (Comp, TEXT) => {
  it(`should:
        - render the ${TEXT} component`, async () => {
    render(
      <View>
        <Comp>{TEXT}</Comp>
      </View>
    );

    expect(screen.getByText(TEXT)).not.toBeNull();
  });
});
