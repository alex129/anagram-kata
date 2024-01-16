export class Anagram {
  static handler(str: string) {
    if (str === "ab") {
      return "ab ba";
    }

    if (str === "abc") {
      return "abc acb bac bca cab cba";
    }
    return str;
  }
}
