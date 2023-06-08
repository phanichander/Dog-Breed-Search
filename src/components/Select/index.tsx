import { Select as SelectAntd } from 'antd';
import { useState } from 'react';

import { breedSelectOptions } from '../../constants/displayFields';

interface Props {
  onSelect: (value: string) => void
}

export const Select = ({ onSelect } : Props) => {  
  const [value, setValue] = useState("Name");

  const handleChange = (value: string) => {
    setValue(value)
    onSelect(value)
  }

  return (      
    <SelectAntd
      value={value}
      className="w-1/3 ml-4"
      onChange={handleChange}
      options={breedSelectOptions}
    />
  );
};