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

  test("Should return all anagrams of abc", () => {
    expect(Anagram.handler("abc")).toBe("abc acb bac bca cab cba");
  });

  test("Should return all anagrams of abcd", () => {
    expect(Anagram.handler("abcd")).toBe(
      "abcd abdc acbd acdb adbc adcb bacd badc bcad bcda bdac bdca cabd cadb cbad cbda cdab cdba dabc dacb dbac dbca dcab dcba"
    );
  });
});
