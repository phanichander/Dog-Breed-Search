export enum FilterOptions {
  NAME = "Name",
  LIFESPAN = "Lifespan",
  HEIGHT = "Height"
}

export const breedSelectOptions = [
  { label: FilterOptions.NAME, value: FilterOptions.NAME },
  { label: FilterOptions.LIFESPAN, value: FilterOptions.LIFESPAN },
  { label: FilterOptions.HEIGHT, value: FilterOptions.HEIGHT },
]