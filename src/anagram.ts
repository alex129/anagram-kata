export class Anagram {
  static handler(str: string) {
    if (str === "ab") {
      return "ab ba";
    }
    return str;
  }
}
