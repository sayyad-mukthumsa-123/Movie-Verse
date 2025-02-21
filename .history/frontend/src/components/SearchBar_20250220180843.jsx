import React from 'react';
import Button from 'react-bootstrap/Button';

const SearchBar = ({ query, setQuery, handleSearch, placeholder }) => {
  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
      <input
        type="text"
        className="form-control w-full md:w-[500px] lg:w-[600px] xl:w-[700px] px-6 py-3 text-2xl border border-gray-300 rounded-md "
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
          className="w-full md:w-auto px-6 py-3 text-xl bg-slate-50 text-cyan-500 rounded-md hover:bg-cyan-700 hover:text-white transition-all hover:scale-105"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
