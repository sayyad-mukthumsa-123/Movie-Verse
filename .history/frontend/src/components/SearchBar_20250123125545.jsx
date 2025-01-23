// import React from 'react';
// import Button from 'react-bootstrap/Button';
// // import "../Styles/SearchBar.css"; 

// const SearchBar = ({ query, setQuery, handleSearch ,placeholder}) => {
//   return (
//     <form onSubmit={handleSearch} className="search-form">
//       <input
//         type="text"
//         className="form-control"
//         id="search-box"
//         placeholder={placeholder}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         required
//       />
//       <div className="btn-search">
//         <Button variant="outline-info" type="submit" id="btn-search">
//           Search
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;

//css-res
import React from 'react';
import Button from 'react-bootstrap/Button';

const SearchBar = ({ query, setQuery, handleSearch, placeholder }) => {
  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 border border-gray-300 rounded-md shadow-lg"
    >
      <input
        type="text"
        className="form-control w-screen md:w-[400px] lg:w-[500px] px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        id="search-box"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <div className="btn-search">
        <Button
          variant="outline-info"
          type="submit"
          id="btn-search"
          className="w-full md:w-auto px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
