import { findNumbersInString } from ".";

describe("utils", () => {
  it('When numbers are string, should return only numbers', () => {
    const stingWithNum = "found 4 dogs by your search";
    expect(findNumbersInString(stingWithNum)).toBe([ '4' ]);
  });

});

