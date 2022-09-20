import React from "react";
import '../components/SearchBar.css'

const SearchBar = ({ value, handleSearchkey, clearSearch, formSubmit }) => {
  return (
    <div className="searchbar">
      <form onSubmit={formSubmit} className="searchbar__form">
        <input
        className="searchbar__input"
          type="text"
          onChange={handleSearchkey}
          placeholder="Seach  By Category"
          value={value}
        />
        {value && <span className="search__inputSpan" onClick={clearSearch}>x</span>}
        <button className="searchbar__button">Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
