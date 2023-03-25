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
      className="flex gap-2 items-center justify-center p-5 bg-black"
    >
      <label htmlFor="search-input" className="text-green-500 text-2xl">
        Search
      </label>
      <input
        placeholder="What do you want to listen to?"
        className="p-2 rounded-full w-96"
        id="search-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};
