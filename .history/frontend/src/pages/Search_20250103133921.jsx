// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Search.css';

// const Search = () => {
//   const clearSearchData = () => {
//     sessionStorage.removeItem('searchQuery');
//     sessionStorage.removeItem('searchMovies');
//     sessionStorage.removeItem('directorSearchData');
//     sessionStorage.removeItem('movieSearchData');
//     sessionStorage.removeItem('searchHeroMovies');
//     sessionStorage.removeItem('heroineSearchData');
//     localStorage.removeItem('searchQuery');
//     localStorage.removeItem('searchMovies');
//   };

//   return (
//     <div className="search-page">
//       <h1 id='title'>Search Options</h1>
//       <div className="search-options">
//         <Link to="/search/movie" className="search-option" onClick={clearSearchData}>
//           Search by Movie
//         </Link>
//         <Link to="/search/director" className="search-option" onClick={clearSearchData}>
//           Search by Director
//         </Link>
//         <Link to="/search/hero" className="search-option" onClick={clearSearchData}>
//           Search by Hero
//         </Link>
//         <Link to="/search/heroine" className="search-option" onClick={clearSearchData}>
//           Search by Heroine
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Search;



// src/components/Search.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Search = ({ userId }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  // Get the query from the URL
  const location = useLocation();
  const searchType = location.pathname.split('/')[2];

  const handleSearch = async (e) => {
    e.preventDefault();
    
    try {
      // Search for movies based on the query
      const response = await axios.get(`/api/search/${query}`);
      setSearchResults(response.data);
      
      // Save the search to the user's search history
      await axios.post('/api/saveSearch', { userId, query });

      // Fetch movie recommendations based on the user's search history
      const recResponse = await axios.get(`/api/recommendations/${userId}`);
      setRecommendations(recResponse.data);
    } catch (err) {
      console.error('Search error', err);
    }
  };

  return (
    <div className="search-page">
      <h1>Search Movies by {searchType}</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h2>Search Results</h2>
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>

      <h2>Recommendations</h2>
      <div className="recommendations">
        {recommendations.length > 0 ? (
          recommendations.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
          ))
        ) : (
          <p>No recommendations available</p>
        )}
      </div>
    </div>
  );
};

export default Search;
