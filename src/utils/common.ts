import queryString from "query-string";

export default class CommonUtils {
  static getPlural: (n: number) => string = (n: number) => (n !== 1 ? `s` : ``);

  static randomInteger = (min: number, max: number): number => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  static formateDate = (date: number) => {
    const deltaMin = Math.floor((Date.now() - date) / (60 * 1000)); // минут

    if (typeof date !== "number" || !date) {
      return ``;
    }

    if (deltaMin < 1) {
      return `less than minute ago`;
    }

    if (deltaMin <= 10) {
      return `${deltaMin} minute${CommonUtils.getPlural(deltaMin)} ago`;
    }

    if (deltaMin <= 60 * 24) {
      return `today`;
    }

    if (deltaMin <= 60 * 24 * 2) {
      return `yesterday`;
    }

    return new Intl.DateTimeFormat("en-US").format(date);
  };

  static sortByDesc = (date: any[]) => date.sort((a, b) => b - a);

  static toggleIsActiveInArray = (id: number, array: any[]) =>
    array.map((el) =>
      el.id === id ? { ...el, isActive: true } : { ...el, isActive: false }
    );

  static concatQueryParams = (
    newQueryParams: { [n: string]: string },
    search: string
  ) => ({
    ...queryString.parse(search),
    ...newQueryParams,
  });

  static getUniqId = (arr: any[]) =>
  arr && arr.length
    ? arr.reduce((acc, item) => (item.id > acc ? item.id : acc), 0) + 1
    : 0;
}
