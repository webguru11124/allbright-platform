import { renderRouter, screen, TestProviders } from "@/__mocks__/test-utils";
import Home from "@/features/Home";

jest.mock("@/features/AppStart/partials/BackgroundImageMasonry");

describe("Home", () => {
  beforeEach(() => {
    renderRouter({
      index: jest.fn(() => (
        <TestProviders>
          <Home />
        </TestProviders>
      )),
    });
  });

  afterEach(() => jest.clearAllMocks());

  it(`should:
      - render the Home feature
    `, () => {
    expect(screen.getAllByTestId(/badge/i).length).toBeGreaterThan(0);
  });
});
