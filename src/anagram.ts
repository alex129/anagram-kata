export class Anagram {
  static handler(str: string) {
    const anagrams = this.generate(str);
    return anagrams.join(" ");
  }

  static generate(str: string) {
    if (str.length <= 1) return [str];

    const result: string[] = [];
    for (let letterIndex = 0; letterIndex < str.length; letterIndex++) {
      const firstLetter = str[letterIndex];
      const remainingLetters = `${str.slice(0, letterIndex)}${str.slice(
        letterIndex + 1
      )}`;

      const subAnagrams = Anagram.generate(remainingLetters);

      for (const subAnagram of subAnagrams) {
        result.push(`${firstLetter}${subAnagram}`);
      }
    }

    return result;
  }
}
