import React from 'react';
import Button from 'react-bootstrap/Button';
import "../Styles/SearchBar.css"; 

const SearchBar = ({ query, setQuery, handleSearch ,placeholder}) => {
  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        className="form-control"
        id="search-box"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <div className="btn-search">
        <Button variant="outline-info" type="submit" id="btn-search">
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
