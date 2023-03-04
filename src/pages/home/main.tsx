import { useState } from 'react';
import { InputBase } from 'components';
import { useDebounce } from 'hooks';
import { Tree } from './tree';

export const Home = () => {
  const [inputValue, setInputValue] = useState('Ali Taghi Naghi Gholi');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(() => value);
  };

  const debouncedInputValue = useDebounce(inputValue, 500);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <InputBase placeholder="write something here ..." value={inputValue} onChange={handleInputChange} />
      <Tree data={debouncedInputValue} />
    </div>
  );
};
