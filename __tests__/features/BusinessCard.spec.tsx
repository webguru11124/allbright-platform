import { mockUser } from "@/__mocks__/data/mock-users";
import { render, screen } from "@/__mocks__/test-utils";
import BusinessCard from "@/features/BusinessCard";

describe("BusinessCard", () => {
  it("should render a user's details as a business card", () => {
    render(<BusinessCard member={mockUser} />);

    expect(screen.getByText("BUSINESS CARD")).not.toBeNull();
    expect(screen.getByText(mockUser.displayName || "")).not.toBeNull();
  });
});
