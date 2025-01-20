import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Search.css';

const Search = () => {
  const clearSearchData = () => {
    sessionStorage.removeItem('searchQuery');
    sessionStorage.removeItem('searchMovies');
    sessionStorage.removeItem('directorSearchData');
    sessionStorage.removeItem('movieSearchData');
    sessionStorage.removeItem('searchHeroMovies');
    sessionStorage.removeItem('heroineSearchData');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('searchMovies');
  };

  return (
    <div className="search-page">
      <h1 id='title'>Search Options</h1>
      <div className="search-options">
        <Link to="/search/movie" className="search-option" onClick={clearSearchData}>
          Search by Movie
        </Link>
        <Link to="/search/director" className="search-option" onClick={clearSearchData}>
          Search by Director
        </Link>
        <Link to="/search/hero" className="search-option" onClick={clearSearchData}>
          Search by Hero
        </Link>
        <Link to="/search/heroine" className="search-option" onClick={clearSearchData}>
          Search by Heroine
        </Link>
        <Link to="/search/genre" className="search-option" onClick={clearSearchData}>
          Search by Genre
        </Link>
        <Link to="/search/lang" className="search-option" onClick={clearSearchData}>
          Search by Language
        </Link>
        <Link to="/search/lang" className="search-option" onClick={clearSearchData}>
          Search by Language
        </Link>
      </div>
    </div>
  );
};

export default Search;
