import { FormEvent } from 'react';
import { Form } from 'react-router-dom';

interface SearchProps {
  value: string;
  setValue: (input: string) => void;
  formSubmit: (event: FormEvent) => void;
}

export const SearchInput = ({ value, setValue, formSubmit }: SearchProps) => {
  return (
    <Form
      onSubmit={formSubmit}
      className="flex gap-2 items-center justify-center p-5 bg-black"
    >
      <label htmlFor="search-input" className="text-green-500 text-2xl">
        Search
      </label>
      <input
        placeholder="What do you want to listen?"
        className="p-2 rounded-full w-96"
        id="search-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form>
  );
};
