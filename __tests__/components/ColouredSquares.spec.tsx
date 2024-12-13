import { fireEvent, render, screen } from "@/__mocks__/test-utils";
import ColourSquares from "@/components/ColourSquares";

describe.each([
  { colour: "#525858" },
  { colour: "#834973" },
  { colour: "#D3B137" },
  { colour: "#6D8868" },
  { colour: "#50968D" },
  { colour: "#955C5C" },
  { colour: "#D18D66" },
  { colour: "#617595" },
  { colour: "#886BB7" },
])("ColouredSquares", ({ colour }) => {
  it("should call a function when pressed", async () => {
    const setVal = jest.fn();

    render(<ColourSquares setValue={setVal} />);

    fireEvent.press(screen.getByTestId(colour));
    expect(setVal).toHaveBeenCalledWith(colour);
  });
});
