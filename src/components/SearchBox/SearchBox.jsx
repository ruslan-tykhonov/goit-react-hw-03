import css from './SearchBox.module.css';

import { useId } from 'react';

export default function SearchBox({ searchValue, setSearchValue }) {
  const searchInputId = useId();
  return (
    <div className={css.wrapper}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        type="text"
        name="searchName"
        value={searchValue}
        id={searchInputId}
        onChange={event => setSearchValue(event.target.value)}
      />
    </div>
  );
}
