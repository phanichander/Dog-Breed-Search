import { useEffect, useState } from 'react'

import './App.css'
import { getApiRequest } from './api';
import { BREEDS_SEARCH, GET_ALL_BREEDS } from './constants/apiList';
import Home from './container/Home';
import { ONE_SECOND, PAGE_TITLE } from './constants/displayMessage';
import { useDebounce } from './hooks/useDebounce';
import { breedFilter, findNumbersInString, sortBy } from './utils';
import { Breeds } from './constants/types';

function App() {
  const [allbreeds, setAllBreeds] = useState<Breeds[]>([]);
  const [breedsInfo, setBreedsInfo] = useState<Breeds[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const debouncedSearch = useDebounce(search, ONE_SECOND);
 
  useEffect(() => {
    if (debouncedSearch) {
      setError(false);
      getDogBreedsBySearch();
    } else {
      getDogBreeds();
    }
  }, [debouncedSearch])

  const handleSearch = (value: string) => {
    setLoading(true);
    setSearch(value)
  }

  const getDogBreeds = async () => {
    try {
      const response  = await getApiRequest(GET_ALL_BREEDS);
      const { data } = response;
      const responseData = data.map((breed: Breeds) => {
        return {...breed, dogHeight: findNumbersInString(breed.height.metric), dogLifeSpan: findNumbersInString(breed.life_span) }
      })

      setAllBreeds(responseData)
      setBreedsInfo(responseData);
    } catch(err) {
      setError(true);
    }

    setLoading(false);
  }

  const getDogBreedsBySearch = async () => {
    try {
      const response = await getApiRequest(`${BREEDS_SEARCH}${debouncedSearch}`);
      const { data } = response;
      const responseData = data.map((breed: Breeds) => {
        return {...breed, dogHeight: findNumbersInString(breed.height.metric), dogLifeSpan: findNumbersInString(breed.life_span) }
      })
      const filterBreeds = responseData ? breedFilter(allbreeds, responseData) : [];

      setBreedsInfo(filterBreeds);
    } catch(err) {
      setError(true);
    }

    setLoading(false);
  }
  
  const handleSelect = async (value: string) => {
    setLoading(true);
    const sortedResponse = await sortBy(breedsInfo, value);
    await setBreedsInfo(sortedResponse);
    setLoading(false);
  }

  return (
    <>
    {PAGE_TITLE}
    <Home 
      isLoading={isLoading}
      breedsInfo={breedsInfo}
      onSearch={handleSearch}
      onSelect={handleSelect}
      error={error}
    />
    </>
  )
}

export default App;
