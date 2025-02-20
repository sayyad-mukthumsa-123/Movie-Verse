
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import SearchBar from '../components/SearchBar';
// import Cards from '../components/Cards';
// // import "../Styles/GenreSearch.css"
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

//css-res
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

    const genresList = {
        action: 28,
        comedy: 35,
        drama: 18,
        thriller: 53,
        romance: 10749,
        sciFi: 878,
        horror: 27,
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (genre.trim() === '' || !genresList[genre.toLowerCase()]) {
            setError('Please enter a valid genre (e.g., Action, Comedy, Drama, etc.)');
            setLoading(false);
            return;
        }

        const genreId = genresList[genre.toLowerCase()];

        try {
            const responses = await Promise.all([
                axios.get(`${API_URL}/discover/movie`, {
                    params: {
                        api_key: API_KEY,
                        with_genres: genreId,
                        with_original_language: 'te', // Telugu
                    },
                }),
                axios.get(`${API_URL}/discover/movie`, {
                    params: {
                        api_key: API_KEY,
                        with_genres: genreId,
                        with_original_language: 'hi', // Hindi
                    },
                }),
                axios.get(`${API_URL}/discover/movie`, {
                    params: {
                        api_key: API_KEY,
                        with_genres: genreId,
                        with_original_language: 'en', // English
                    },
                }),
            ]);

            const moviesTelugu = responses[0].data.results;
            const moviesHindi = responses[1].data.results;
            const moviesEnglish = responses[2].data.results;

            const mixedMovies = [...moviesTelugu, ...moviesHindi, ...moviesEnglish].slice(0, 20);

            setMovies(mixedMovies);
            setError('');
        } catch (err) {
            setError('An error occurred while fetching movies');
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <div className="genre-container outline-dashed flex flex-col items-center p-4 md:p-8">
            <h1 className="text-center text-2xl md:text-4xl font-bold mb-6">Search By Genre</h1>
            <SearchBar
                query={genre}
                setQuery={setGenre}
                handleSearch={handleSearch}
                placeholder={"Enter genre (e.g., Action, Comedy, Drama)"}
            />
            {loading && <p className="text-lg text-gray-500 mt-4">Loading...</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <div className="movie-results mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Cards key={movie.id} movie={movie} onClick={handleMovieClick} />
                    ))
                ) : (
                    !loading && <p className="text-gray-500 text-center w-full">No movies found. Try searching for another genre!</p>
                )}
            </div>
        </div>
    );
};

export default GenreSearch;
