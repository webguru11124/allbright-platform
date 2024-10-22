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

  it("parseDateString", () => {
    const date = "09/05/1993";
    const result = parseDateString(date);
    const expectedDate = DateTime.fromObject(
      { year: 1993, month: 5, day: 9 },
      { locale: "fr" }
    ).toJSDate();
    expect(result).toEqual(expectedDate);
  });
});
