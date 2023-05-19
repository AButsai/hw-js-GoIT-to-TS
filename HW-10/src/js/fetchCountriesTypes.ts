export interface IRefs {
  searchBox: HTMLInputElement | null;
  countryList: HTMLElement | null;
  countryInfo: HTMLElement | null;
}

export interface IData {
  capital: string[];
  flags: IFlags;
  languages: IObject;
  name: IName;
  population: number;
}

export interface IFlags {
  alt: string;
  png: string;
  svg: string;
}

export interface IName {
  common: string;
  nativeName: INativeName;
  official: string;
}

export interface INativeName {
  [key: string]: IObject;
}

export interface IObject {
  [key: string]: string;
}
