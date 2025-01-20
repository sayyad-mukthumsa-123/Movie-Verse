import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Styles/GenreSearch.css";
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const GenreSearch = () => {
    const [genre, setGenre] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const languages = ["te", "hi", "en"]; // Telugu, Hindi, and English

    useEffect(() => {
        // Retrieve search data from sessionStorage
        const savedSearchData = sessionStorage.getItem('genreSearchData');
        if (savedSearchData) {
            const { genre, movies } = JSON.parse(savedSearchData);
            setGenre(genre);
            setMovies(movies);
        }
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (genre.trim() === '') {
            setError('Please enter a genre');
            setLoading(false);
            return;
        }

        try {
            // Fetch genres list to get the genre ID
            const genresResponse = await axios.get(`${API_URL}/genre/movie/list`, {
                params: {
                    api_key: API_KEY,
                },
            });

            const genreData = genresResponse.data.genres.find((g) =>
                g.name.toLowerCase() === genre.toLowerCase()
            );

            if (!genreData) {
                setError('Genre not found');
                setMovies([]);
                sessionStorage.removeItem('genreSearchData');
                setLoading(false);
                return;
            }

            const genreId = genreData.id;

            // Fetch movies by genre
            const moviesResponse = await axios.get(`${API_URL}/discover/movie`, {
                params: {
                    api_key: API_KEY,
                    with_genres: genreId,
                    language: "en-US",
                },
            });

            const filteredMovies = moviesResponse.data.results.filter((movie) =>
                languages.includes(movie.original_language)
            );

            setMovies(filteredMovies);
            setError('');

            // Save search data to sessionStorage
            sessionStorage.setItem(
                'genreSearchData',
                JSON.stringify({ genre, movies: filteredMovies })
            );
        } catch (err) {
            setError('An error occurred while fetching data');
            setMovies([]);
            sessionStorage.removeItem('genreSearchData');
        } finally {
            setLoading(false);
        }
    };

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <div className='genre-container'>
            <h1 className="text-center">Search By Genre</h1>
            <SearchBar
                query={genre}
                setQuery={setGenre}
                handleSearch={handleSearch}
                placeholder={"Enter genre (e.g., Action, Comedy, Drama)"}
            />
            {loading && <p id="alt-text">Loading...</p>}
            {error && <p>{error}</p>}
            <div className="movie-results mt-4">
                {movies.length > 0 ? (
                    <ul className="list-group">
                        {movies.map((movie) => (
                            <Cards key={movie.id} movie={movie} onClick={handleMovieClick} />
                        ))}
                    </ul>
                ) : (!loading && <p id='alt-text'>No movies found. Try searching for another genre!</p>)}
            </div>
        </div>
    );
};

export default GenreSearch;
