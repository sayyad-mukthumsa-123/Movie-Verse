import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Styles/DirectorSearch.css";
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const DirectorSearch = () => {
    const [query, setQuery] = useState(''); // Query state to handle language or director name
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve search data from sessionStorage
        const savedSearchData = sessionStorage.getItem('directorSearchData');
        if (savedSearchData) {
            const { query, movies } = JSON.parse(savedSearchData);
            setQuery(query);
            setMovies(movies);
        }
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (query.trim() === '') {
            setError('Please enter a search query');
            return;
        }

        try {
            const languageResponse = await axios.get(`${API_URL}/discover/movie`, {
                params: {
                    api_key: API_KEY,
                    with_original_language: query.trim().toLowerCase(), // Filtering by language
                },
            });

            const languageMovies = languageResponse.data.results;

            if (languageMovies.length > 0) {
                setMovies(languageMovies);
                setError('');

                // Save search data to sessionStorage
                sessionStorage.setItem('directorSearchData', JSON.stringify({ query, movies: languageMovies }));
            } else {
                setError('No movies found for the selected language');
                setMovies([]);
                sessionStorage.removeItem('directorSearchData');
            }
        } catch (err) {
            setError('An error occurred while fetching data');
            setMovies([]);
            sessionStorage.removeItem('directorSearchData');
        } finally {
            setLoading(false);
        }
    };

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <div className='director-container'>
            <h1 className="text-center">Search By Language</h1>
            <SearchBar
                query={query}
                setQuery={setQuery}
                handleSearch={handleSearch}
                placeholder={"Enter language code (e.g., en, es, fr)"}
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
                ) : (!loading && <p id='alt-text'>No movies found. Try searching for another language!</p>)}
            </div>
        </div>
    )
};

export default DirectorSearch;
