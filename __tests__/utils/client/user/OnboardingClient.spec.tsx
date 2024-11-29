import _ from "lodash";

import OnboardingClient from "@/utils/client/user/OnboardingClient";

describe("OnboardingClient", () => {
  it("should return a list of filtered cities if a country code is provided", () => {
    const result = new OnboardingClient().getCities("GB");
    expect(result.length).toBe(244);
    expect(_.head(result)).toStrictEqual({
      key: expect.any(String),
      label: expect.any(String),
      value: expect.any(String),
    });
  });

  it("should return [] if a country code is not provided", () => {
    const result = new OnboardingClient().getCities();
    expect(result.length).toBe(0);
  });
});
