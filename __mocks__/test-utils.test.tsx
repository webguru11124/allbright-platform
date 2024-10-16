import { convertDateToInputString, parseDateString } from "./test-utils";

describe("test-utils", () => {
  it("convertDateToInputString", () => {
    const date = new Date("1999-04-08T00:00:00.000Z");
    const result = convertDateToInputString(date, "en-GB");
    expect(result).toBe("08.04.1999");
  });

  it("parseDateString", () => {
    const date = "09.05.1993";
    const result = parseDateString(date, "en-GB");
    expect(result).toEqual(new Date("1993-05-08T22:00:00.000Z"));
  });
});
