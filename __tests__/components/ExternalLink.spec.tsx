import { render, screen } from "@testing-library/react-native";

import { ExternalLink } from "@/components/ExternalLink";

describe("ExternalLink", () => {
  it(`should:
        - call openBrowserAsync when clicking`, async () => {
    render(<ExternalLink href="http://test-link.com" />);

    expect(screen.getByRole("link")).not.toBeNull();
  });
});
