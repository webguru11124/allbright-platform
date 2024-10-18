import { renderRouter, screen } from "expo-router/testing-library";

import Connect from "@/features/Connect";
import Providers from "@/utils/providers";

describe("Connect", () => {
  beforeEach(() => {
    renderRouter({
      index: jest.fn(() => (
        <Providers>
          <Connect />
        </Providers>
      )),
    });
  });

  afterEach(() => jest.clearAllMocks());

  it(`should:
      - render the Connect feature
    `, () => {
    expect(screen.getByText(/you are on the connect page/i)).not.toBeNull();
    expect(screen.getByText(/go back/i)).not.toBeNull();
  });
});
