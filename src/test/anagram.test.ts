import { Anagram } from "../anagram";

describe("Anagram", () => {
  test("should return empty string if the input string is empty", () => {
    expect(Anagram.get("")).toBe("");
  });

  test("Should return 'b' if the input string is b", () => {
    expect(Anagram.get("b")).toBe("b");
  });

  test("Should return all anagrams of ab", () => {
    expect(Anagram.get("ab")).toBe("ab ba");
  });

  test("Should return all anagrams of abc", () => {
    expect(Anagram.get("abc")).toBe("abc acb bac bca cab cba");
  });

  test("Should return all anagrams of abcd", () => {
    expect(Anagram.get("abcd")).toBe(
      "abcd abdc acbd acdb adbc adcb bacd badc bcad bcda bdac bdca cabd cadb cbad cbda cdab cdba dabc dacb dbac dbca dcab dcba"
    );
  });

  test("Should return all anagrams of biro", () => {
    const expectedAnagrams = [
      "biro",
      "bior",
      "brio",
      "broi",
      "boir",
      "bori",
      "ibro",
      "ibor",
      "irbo",
      "irob",
      "iobr",
      "iorb",
      "rbio",
      "rboi",
      "ribo",
      "riob",
      "roib",
      "robi",
      "obir",
      "obri",
      "oibr",
      "oirb",
      "orbi",
      "orib",
    ];

    Anagram.get("biro")
      .split(" ")
      .forEach((anagram) => {
        expect(expectedAnagrams).toContain(anagram);
      });
  });
});
