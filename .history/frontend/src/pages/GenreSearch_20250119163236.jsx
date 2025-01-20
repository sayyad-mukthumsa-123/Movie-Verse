// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../Styles/GenreSearch.css";
// import SearchBar from "../components/SearchBar";
// import Cards from "../components/Cards";

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = "https://api.themoviedb.org/3";

// const GenreSearch = () => {
//   const [genre, setGenre] = useState("");
//   const [genresList, setGenresList] = useState([]);
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch genres list on component mount
//     const fetchGenres = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/genre/movie/list`, {
//           params: {
//             api_key: API_KEY,
//           },
//         });
//         setGenresList(response.data.genres);
//       } catch (err) {
//         setError("Failed to load genres.");
//       }
//     };

//     fetchGenres();
//   }, []);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const selectedGenre = genresList.find((g) => g.name.toLowerCase() === genre.toLowerCase());

//     if (!selectedGenre) {
//       setError("Invalid genre. Please select a valid genre from the list.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.get(`${API_URL}/discover/movie`, {
//         params: {
//           api_key: API_KEY,
//           with_genres: selectedGenre.id,
//         },
//       });

//       setMovies(response.data.results);
//       setError("");

//       // Save search data to sessionStorage
//       sessionStorage.setItem(
//         "genreSearchData",
//         JSON.stringify({ genre, movies: response.data.results })
//       );
//     } catch (err) {
//       setError("An error occurred while fetching movies.");
//       setMovies([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMovieClick = (movieId) => {
//     navigate(`/movie/${movieId}`);
//   };

//   return (
//     <div className="genre-container">
//       <h1 className="text-center">Search By Genre</h1>
//       <SearchBar
//         query={genre}
//         setQuery={setGenre}
//         handleSearch={handleSearch}
//         placeholder={"Enter genre (e.g., Action, Comedy, Drama)"}
//       />
//       {loading && <p id="alt-text">Loading...</p>}
//       {error && <p>{error}</p>}
//       <div className="movie-results mt-4">
//         {movies.length > 0 ? (
//           <ul className="list-group">
//             {movies.map((movie) => (
//               <Cards key={movie.id} movie={movie} onClick={handleMovieClick} />
//             ))}
//           </ul>
//         ) : (
//           !loading && <p id="alt-text">No movies found. Try another genre!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GenreSearch;



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
                params: { api_key: API_KEY },
            });

            const selectedGenre = genreResponse.data.genres.find(
                (g) => g.name.toLowerCase() === genre.toLowerCase()
            );

            if (!selectedGenre) {
                setError('Genre not found');
                setMovies([]);
                sessionStorage.removeItem('genreSearchData');
                setLoading(false);
                return;
            }

            const genreId = selectedGenre.id;

            const moviesResponse = await axios.get(`${API_URL}/discover/movie`, {
                params: {
                    api_key: API_KEY,
                    with_genres: genreId,
                    language: 'en-US',
                    sort_by: 'popularity.desc',
                    'vote_count.gte': 10,
                    include_adult: false,
                },
            });

            // Filter results to include Telugu, Hindi, and English movies
            const filteredMovies = moviesResponse.data.results.filter(
                (movie) =>
                    ['te', 'hi', 'en'].includes(movie.original_language)
            );

            if (filteredMovies.length === 0) {
                setError('No movies found for this genre in the specified languages');
                setMovies([]);
                sessionStorage.removeItem('genreSearchData');
            } else {
                setMovies(filteredMovies);
                setError('');

                // Save search data to sessionStorage
                sessionStorage.setItem('genreSearchData', JSON.stringify({ genre, movies: filteredMovies }));
            }
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
                placeholder={"Enter genre name (e.g., Action, Drama, Comedy)"}
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
