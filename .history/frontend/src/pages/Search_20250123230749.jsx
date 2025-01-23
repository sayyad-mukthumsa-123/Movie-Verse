// import React from 'react';
// import { Link } from 'react-router-dom';
// // import '../Styles/Search.css';

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
//         <Link to="/search/genre" className="search-option" onClick={clearSearchData}>
//           Search by Genre
//         </Link>
//         <Link to="/search/lang" className="search-option" onClick={clearSearchData}>
//           Search by Language
//         </Link>
        
//       </div>
//     </div>
//   );
// };

// export default Search;


//css
import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-cyan-800 mb-10 text-center">Search Options</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-4xl">
        <Link
          to="/search/movie"
          className="bg-blue-500 text-white text-3xl py-3 px-6 rounded-lg text-center hover:bg-blue-600 transition"
          onClick={clearSearchData}
        >
          Search by Movie
        </Link>
        <Link
          to="/search/director"
          className="bg-green-500 text-white text-3xl py-3 px-6 rounded-lg text-center hover:bg-green-600 transition"
          onClick={clearSearchData}
        >
          Search by Director
        </Link>
        <Link
          to="/search/hero"
          className="bg-red-500 text-white text-3xl py-3 px-6 rounded-lg text-center hover:bg-red-600 transition"
          onClick={clearSearchData}
        >
          Search by Hero
        </Link>
        <Link
          to="/search/heroine"
          className="bg-purple-500 text-white text-3xl py-3 px-6 rounded-lg text-center hover:bg-purple-600 transition"
          onClick={clearSearchData}
        >
          Search by Heroine
        </Link>
        <Link
          to="/search/genre"
          className="bg-yellow-500 text-white text-3xl py-3 px-6 rounded-lg text-center hover:bg-yellow-600 transition"
          onClick={clearSearchData}
        >
          Search by Genre
        </Link>
        <Link
          to="/search/lang"
          className="bg-indigo-500 text-white text-3xl py-3 px-6 rounded-lg text-center hover:bg-indigo-600 transition"
          onClick={clearSearchData}
        >
          Search by Language
        </Link>
      </div>
    </div>
  );
};

export default Search;
