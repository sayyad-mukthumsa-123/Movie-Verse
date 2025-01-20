import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const GenreSearch = () => {
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [genreList, setGenreList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the genre list on component mount
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`${API_URL}/genre/movie/list`, {
          params: {
            api_key: API_KEY,
            language: "en-US", // Get genre names in English
          },
        });
        setGenreList(response.data.genres);
      } catch (err) {
        setError("Failed to load genres. Please try again later.");
      }
    };

    fetchGenres();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!genre.trim()) {
      setError("Please select a genre.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          with_genres: genre,
          language: "en-US",
          with_original_language: "te|hi|en", // Filter for Telugu, Hindi, and English
        },
      });

      setMovies(response.data.results);
      setError("");
    } catch (err) {
      setError("An error occurred while fetching movies. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="genre-container">
      <h1 className="text-center">Search Movies by Genre</h1>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="genre-select">Select Genre:</label>
          <select
            id="genre-select"
            className="form-control"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">-- Select a Genre --</option>
            {genreList.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Search
        </button>
      </form>
      {loading && <p id="alt-text">Loading...</p>}
      {error && <p className="error-text">{error}</p>}
      <div className="movie-results mt-4">
        {movies.length > 0 ? (
          <ul className="list-group">
            {movies.map((movie) => (
              <Cards key={movie.id} movie={movie} onClick={handleMovieClick} />
            ))}
          </ul>
        ) : (
          !loading && <p id="alt-text">No movies found. Try selecting another genre!</p>
        )}
      </div>
    </div>
  );
};

export default GenreSearch;
