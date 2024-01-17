export class Anagram {
  static get(str: string) {
    const anagrams = Anagram.generate(str);
    return anagrams.join(" ");
  }

  static generate(str: string) {
    if (str.length === 1) return [str];
    if (str.length === 0) return [];

    const anagrams: string[] = [];
    for (let letterIndex = 0; letterIndex < str.length; letterIndex++) {
      const curentLetter = str[letterIndex];
      const remainingLetters = `${str.slice(0, letterIndex)}${str.slice(
        letterIndex + 1
      )}`;

      const subAnagrams = Anagram.generate(remainingLetters);
      for (const subAnagram of subAnagrams) {
        anagrams.push(`${curentLetter}${subAnagram}`);
      }
    }

    return anagrams;
  }
}
