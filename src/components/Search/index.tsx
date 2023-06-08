import { Input } from 'antd';
import { SEARCH_DOG_BREED } from '../../constants/displayMessage';

interface Props {
  onSearch: (value: string) => void;
}

export const InputSearch = ({ onSearch } : Props) => {
  const onChange = (eve: { target: { value: string; }; }) => {
    onSearch(eve.target.value);
  }

  return (
    <Input
      placeholder={SEARCH_DOG_BREED}
      onChange={onChange}
    />
  );
}
