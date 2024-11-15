import { renderRouter, screen, waitFor } from "expo-router/testing-library";

import PublicProfile from "@/features/Onboarding/PublicProfile";
import Welcome from "@/features/Onboarding/Welcome";
import Providers from "@/utils/providers";

describe("Onboarding", () => {
  describe("Welcome", () => {
    beforeEach(() => {
      renderRouter({
        index: jest.fn(() => <Welcome />),
      });
    });

    afterEach(() => jest.clearAllMocks());

    it(`should:
    - render the Welcome feature
    `, async () => {
      const expectedText = [
        /welcome to allbright/i,
        /let's get started on personalising your experience/i,
        /the first section will be visible on your public profile/i,
        /giving others a chance to get to know you better/i,
        /meanwhile, the following sections/i,
        /will remain private. This information will never be shared with anyone else./i,
        / allBright will use it to tailor your experience on the platform./i,
      ];
      await waitFor(() => {
        expect(screen.getByText(expectedText[0])).not.toBeNull();
      });
      expect(screen.getByText(expectedText[1])).not.toBeNull();
      expect(screen.getByText(expectedText[2])).not.toBeNull();
      expect(screen.getByText(expectedText[3])).not.toBeNull();
      expect(screen.getByText(expectedText[4])).not.toBeNull();
      expect(screen.getByText(expectedText[5])).not.toBeNull();
      expect(screen.getByText(expectedText[6])).not.toBeNull();
    });
  });

  describe("PublicProfile", () => {
    beforeEach(() => {
      renderRouter({
        index: jest.fn(() => (
          <Providers>
            <PublicProfile />
          </Providers>
        )),
      });
    });

    afterEach(() => jest.clearAllMocks());

    it(`should:
    - render the PublicProfile feature
    `, async () => {
      const expectedText = [
        /section 1: public profile/i,
        /step 1 of 3/i,
        /This information will be publicly visible on your AllBright profile. Try to provide information that will help the right people connect with you on the platform./i,
        /why do you want to meet others\? choose between 1 and to 3/i,
        /Please ensure it is of just yourself and no one else./i,
        /i do not wish to use a photo/i,
        /biography/i,
      ];
      await waitFor(() => {
        expect(screen.getByText(expectedText[0])).not.toBeNull();
      });
      expect(screen.getByText(expectedText[1])).not.toBeNull();
      expect(screen.getByText(expectedText[2])).not.toBeNull();
      expect(screen.getByText(expectedText[3])).not.toBeNull();
      expect(screen.getByText(expectedText[4])).not.toBeNull();
      expect(screen.getByText(expectedText[5])).not.toBeNull();
      expect(screen.getByText(expectedText[6])).not.toBeNull();
    });
  });
});
