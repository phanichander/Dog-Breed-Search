import { FilterOptions } from "../constants/displayFields";
import { Breeds } from "../constants/types";

export const sortBy = (breedsInfo: Breeds[], type: string) => {
  switch(type) {
    case FilterOptions.LIFESPAN:
      return breedsInfo.sort((firstEl,secondEl)=> firstEl.dogLifeSpan[0] - secondEl.dogLifeSpan[0]);

    case FilterOptions.HEIGHT:
      return breedsInfo.sort((firstEl,secondEl)=> firstEl.dogHeight[0] - secondEl.dogHeight[0]);
     
    default:
    case FilterOptions.NAME:
      return breedsInfo.sort((a, b) => a.name.localeCompare(b.name));
  }
};

export const breedFilter = (breeds: Breeds[], respBreeds: Breeds[]) => {
  return breeds.filter((el) => {
    return respBreeds.some((f) => {
      return f.name === el.name;
    });
  });
}

export const findNumbersInString = (value: string) => {
  return value.match(/\d+/g);
}
