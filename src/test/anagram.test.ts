import { Anagram } from "../anagram";

describe("Anagram", () => {
  test("should return empty string if the input string is empty", () => {
    expect(Anagram.handler("")).toBe("");
  });
});
