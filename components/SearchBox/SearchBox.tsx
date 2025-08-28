import css from './SearchBox.module.css';

interface SearchBoxProps {
  searchQuery: string;
  setSearchQuery: (newSearchQuery: string) => void;
  resetPage: () => void;
}

export default function SearchBox({ searchQuery, setSearchQuery, resetPage }: SearchBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    resetPage();
  };

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      defaultValue={searchQuery}
      onChange={handleChange}
    />
  );
}
