import { Anagram } from "../anagram";

describe("Anagram", () => {
  test("should return empty string if the input string is empty", () => {
    expect(Anagram.handler("")).toBe("");
  });

  test("Should return 'b' if the input string is b", () => {
    expect(Anagram.handler("b")).toBe("b");
  });

  test("Should return all anagrams of ab", () => {
    expect(Anagram.handler("ab")).toBe("ab ba");
  });
});
