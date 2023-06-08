export interface AVERAGE {
  imperial: string;
  metric:   string;
}

export interface Image {
  id:     string;
  width:  number;
  height: number;
  url:    string;
}

export interface Breeds {
  dogLifeSpan: [number, number];
  weight: AVERAGE;
  height: AVERAGE;
  id: number;
  name: string;
  bred_for?: string;
  breed_group?: BreedGroup;
  life_span: string;
  temperament?: string;
  origin?: string;
  reference_image_id: string;
  image: Image;
  country_code?: CountryCode;
  description?: string;
  history?: string;
  dogHeight: [number, number];
}

export enum BreedGroup {
  Empty = "",
  Herding = "Herding",
  Hound = "Hound",
  Mixed = "Mixed",
  NonSporting = "Non-Sporting",
  Sporting = "Sporting",
  Terrier = "Terrier",
  Toy = "Toy",
  Working = "Working",
}

export enum CountryCode {
  Ag = "AG",
  Au = "AU",
  Us = "US",
}
