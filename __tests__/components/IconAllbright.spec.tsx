import { render, screen } from "@testing-library/react-native";
import IconAllbright from "@/components/IconAllbright";

describe("IconAllbright", () => {
  it(`should:
        - render the Allbright icon`, async () => {
    render(<IconAllbright />);

    expect(screen.getByTestId("icon-allbright")).not.toBeNull();
  });
});
