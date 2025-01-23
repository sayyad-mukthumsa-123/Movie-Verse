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
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
      <input
        type="text"
        className="form-control w-full md:w-[500px] lg:w-[600px] xl:w-[700px] px-6 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
        id="search-box"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <div className="btn-search">
        <Button
          // variant="outline-info"
          type="submit"
          // id="btn-search"
          className="w-full md:w-auto px-6 py-3 text-xl border border-blue-500 text-white rounded-md hover:bg-blue-500 hover:text-white transition-all hover:scale-105"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
