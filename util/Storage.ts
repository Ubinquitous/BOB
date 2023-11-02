export default class Storage {
  static getItem(key: string) {
    return typeof window !== "undefined" ? localStorage.getItem(key) : "";
  }

  static setItem(key: string, value: string) {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, value);
  }

  static delItem(key: string) {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  }

  static clear() {
    if (typeof window === "undefined") return;
    localStorage.clear();
  }
}
