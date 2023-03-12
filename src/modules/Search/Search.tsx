import { SidebarLayout } from '../../ui/Layout/SidebarLayout';
import { SearchInput } from './components/SearchInput';
import { SearchResults } from './components/SearchResults';

export const Search = () => {
  return (
    <div className="bg-black min-h-screen">
      <SearchInput />
      <SearchResults />
    </div>
  );
};
