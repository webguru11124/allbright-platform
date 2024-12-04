import { faker } from "@faker-js/faker/.";

import { render, screen } from "@/__mocks__/test-utils";
import Placeholder from "@/components/Placeholder";

describe.each([{ input: faker.lorem.word() }, { input: faker.lorem.word() }, { input: faker.lorem.word() }])(
  "Placeholder",
  ({ input }) => {
    it("should display the passed in placeholderText", () => {
      render(<Placeholder placeholderText={input} />);
      expect(screen.getByText(input)).not.toBeNull();
    });
  }
);

describe("Placeholder", () => {
  it("should display the text 'Placeholder' if no placeholderText is passed in as a prop", () => {
    render(<Placeholder />);
    expect(screen.getByText(/placeholder/i)).not.toBeNull();
  });
});
