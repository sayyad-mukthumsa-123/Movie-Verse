
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import SearchBar from '../components/SearchBar';
// import Cards from '../components/Cards';

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = "https://api.themoviedb.org/3";

// const GenreSearch = () => {
//     const [genre, setGenre] = useState('');
//     const [movies, setMovies] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const genresList = {
//         action: 28,
//         comedy: 35,
//         drama: 18,
//         thriller: 53,
//         romance: 10749,
//         sciFi: 878,
//         horror: 27,
//     };

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);

//         if (genre.trim() === '' || !genresList[genre.toLowerCase()]) {
//             setError('Please enter a valid genre (e.g., Action, Comedy, Drama, etc.)');
//             setLoading(false);
//             return;
//         }

//         const genreId = genresList[genre.toLowerCase()];

//         try {
//             const responses = await Promise.all([
//                 axios.get(`${API_URL}/discover/movie`, {
//                     params: {
//                         api_key: API_KEY,
//                         with_genres: genreId,
//                         with_original_language: 'te', // Telugu
//                     },
//                 }),
//                 axios.get(`${API_URL}/discover/movie`, {
//                     params: {
//                         api_key: API_KEY,
//                         with_genres: genreId,
//                         with_original_language: 'hi', // Hindi
//                     },
//                 }),
//                 axios.get(`${API_URL}/discover/movie`, {
//                     params: {
//                         api_key: API_KEY,
//                         with_genres: genreId,
//                         with_original_language: 'en', // English
//                     },
//                 }),
//             ]);

//             const moviesTelugu = responses[0].data.results;
//             const moviesHindi = responses[1].data.results;
//             const moviesEnglish = responses[2].data.results;

//             const mixedMovies = [...moviesTelugu, ...moviesHindi, ...moviesEnglish].slice(0, 20); // Mix and limit to 20 results

//             setMovies(mixedMovies);
//             setError('');
//         } catch (err) {
//             setError('An error occurred while fetching movies');
//             setMovies([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleMovieClick = (movieId) => {
//         navigate(`/movie/${movieId}`);
//     };

//     return (
//         <div className='genre-container'>
//             <h1 className="text-center">Search By Genre</h1>
//             <SearchBar
//                 query={genre}
//                 setQuery={setGenre}
//                 handleSearch={handleSearch}
//                 placeholder={"Enter genre (e.g., Action, Comedy, Drama)"}
//             />
//             {loading && <p id="alt-text">Loading...</p>}
//             {error && <p>{error}</p>}
//             <div className="movie-results mt-4">
//                 {movies.length > 0 ? (
//                     <ul className="list-group">
//                         {movies.map((movie) => (
//                             <Cards key={movie.id} movie={movie} onClick={handleMovieClick} />
//                         ))}
//                     </ul>
//                 ) : (!loading && <p id='alt-text'>No movies found. Try searching for another genre!</p>)}
//             </div>
//         </div>
//     );
// };

// export default GenreSearch;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const GenreSearch = () => {
    const [genre, setGenre] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const languageMap = {
        Telugu: 'te',
        Hindi: 'hi',
        English: 'en',
    };

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
            setError('Please enter a genre name');
            setLoading(false);
            return;
        }

        try {
            const genreResponse = await axios.get(`${API_URL}/genre/movie/list`, {
                params: {
                    api_key: API_KEY,
                },
            });

            const genreId = genreResponse.data.genres.find(
                (g) => g.name.toLowerCase() === genre.toLowerCase()
            )?.id;

            if (!genreId) {
                setError('Genre not found');
                setMovies([]);
                setLoading(false);
                return;
            }

            const moviePromises = Object.entries(languageMap).map(async ([languageName, languageCode]) => {
                const movieResponse = await axios.get(`${API_URL}/discover/movie`, {
                    params: {
                        api_key: API_KEY,
                        with_genres: genreId,
                        language: 'en-US',
                        with_original_language: languageCode,
                        sort_by: 'popularity.desc',
                    },
                });
                return { languageName, movies: movieResponse.data.results.slice(0, 5) };
            });

            const results = await Promise.all(moviePromises);
            const categorizedMovies = results.reduce((acc, { languageName, movies }) => {
                acc[languageName] = movies;
                return acc;
            }, {});

            setMovies(categorizedMovies);

            // Save search data to sessionStorage
            sessionStorage.setItem('genreSearchData', JSON.stringify({ genre, movies: categorizedMovies }));
        } catch (err) {
            setError('An error occurred while fetching data');
            setMovies([]);
            sessionStorage.removeItem('genreSearchData');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='genre-container'>
            <h1 className="text-center">Search By Genre</h1>
            <SearchBar
                query={genre}
                setQuery={setGenre}
                handleSearch={handleSearch}
                placeholder={"Enter genre (e.g., Action, Comedy)"}
            />
            {loading && <p id="alt-text">Loading...</p>}
            {error && <p>{error}</p>}
            <div className="movie-results mt-4">
                {Object.keys(movies).length > 0 ? (
                    Object.entries(movies).map(([language, movieList]) => (
                        <div key={language}>
                            <h2>{language} Movies</h2>
                            <ul className="list-group">
                                {movieList.map((movie) => (
                                    <Cards key={movie.id} movie={movie} />
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (!loading && <p id='alt-text'>No movies found. Try searching for another genre!</p>)}
            </div>
        </div>
    );
};

export default GenreSearch;
