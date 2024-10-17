import { renderRouter, screen } from "expo-router/testing-library";
import Home from "@/features/Home";
import Providers from "@/utils/providers";

jest.mock("@/features/AppStart/partials/BackgroundImageMasonry");

describe("Home", () => {
  beforeEach(() => {
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <Home />
        </Providers>
      )),
    });
  });

  afterEach(() => jest.clearAllMocks());

  it(`should:
      - render the Home feature
    `, () => {
    expect(screen.getByText(/go back/i)).not.toBeNull();
  });
});
