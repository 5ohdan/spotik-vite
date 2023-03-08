import { FormEvent, useState } from 'react';
import { getSearchResults } from '../helpers';

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const result = await getSearchResults(inputValue.trim());
    console.log(result.data);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex gap-2 items-center justify-center p-5 bg-gray-800"
    >
      <label
        htmlFor="search-input"
        className="text-green-500 text-2xl font-bold"
      >
        Search
      </label>
      <input
        className="p-2 rounded-md"
        id="search-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};
