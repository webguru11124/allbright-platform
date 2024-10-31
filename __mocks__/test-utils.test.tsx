import { DateTime } from "luxon";

import { convertDateToInputString, parseDateString } from "./test-utils";

describe("test-utils", () => {
  it("convertDateToInputString", () => {
    const date = DateTime.fromObject(
      { year: 1999, month: 4, day: 8 },
      { locale: "fr" }
    ).toJSDate();
    const result = convertDateToInputString(date, "fr");
    expect(result).toBe("08/04/1999");
  });

  // FIXME: hours fail when testing in different timezones
  it.skip("parseDateString", () => {
    const date = "09.05.1993";
    const result = parseDateString(date, "en-GB");
    expect(result).toEqual(new Date("1993-05-08T23:00:00.000Z"));
  });
});
