import { Spin } from 'antd';

import { CustomGrid } from '../components/CustomGrid';
import { InputSearch } from '../components/Search';
import { Select } from '../components/Select';
import { PAGE_TITLE, SOMETHING_WENT_WRONG } from '../constants/displayMessage';
import { Breeds } from '../constants/types';

interface Props {
  isLoading: boolean;
  breedsInfo: Breeds[];
  error: boolean;
  onSearch: (value: string) => void;
  onSelect: (value: string) => void;
}

const Home = ({ isLoading, breedsInfo, error, onSearch, onSelect } : Props) => {
  return (
    <main className='p-3.5 rounded-lg m-10 bg-slate-200'>
      <h1 className='my-6'>
        {PAGE_TITLE}
      </h1>
      
      <div className='flex m-4'>
        <InputSearch onSearch={onSearch} /> 
        <Select onSelect={onSelect} />
      </div>

      {isLoading ? <Spin data-testid="Spinner" size="large" /> :
        error ? <p className='text-red-800'> {SOMETHING_WENT_WRONG} </p> : 
        <CustomGrid dogBreeds={breedsInfo} />
      }
    </main>
  )
}

export default Home;
