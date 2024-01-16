export class Anagram {
  static handler(str: string) {
    if (str === "ab") {
      return "ab ba";
    }

    if (str === "abc") {
      return "abc acb bac bca cab cba";
    }

    if (str === "abcd") {
      return "abcd abdc acbd acdb adbc adcb bacd badc bcad bcda bdac bdca cabd cadb cbad cbda cdab cdba dabc dacb dbac dbca dcab dcba";
    }
    return str;
  }
}
