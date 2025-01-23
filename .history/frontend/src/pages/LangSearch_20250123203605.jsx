// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import "../Styles/DirectorSearch.css";
// // import SearchBar from '../components/SearchBar';
// // import Cards from '../components/Cards';

// // const API_KEY = process.env.REACT_APP_API_KEY;
// // const API_URL = "https://api.themoviedb.org/3";

// // const DirectorSearch = () => {
// //     const [query, setQuery] = useState(''); // Query state to handle language or director name
// //     const [movies, setMovies] = useState([]);
// //     const [error, setError] = useState('');
// //     const [loading, setLoading] = useState(false);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         // Retrieve search data from sessionStorage
// //         const savedSearchData = sessionStorage.getItem('directorSearchData');
// //         if (savedSearchData) {
// //             const { query, movies } = JSON.parse(savedSearchData);
// //             setQuery(query);
// //             setMovies(movies);
// //         }
// //     }, []);

// //     const handleSearch = async (e) => {
// //         e.preventDefault();
// //         setLoading(true);
// //         setError(null);

// //         if (query.trim() === '') {
// //             setError('Please enter a search query');
// //             return;
// //         }

// //         try {
// //             const languageResponse = await axios.get(`${API_URL}/discover/movie`, {
// //                 params: {
// //                     api_key: API_KEY,
// //                     with_original_language: query.trim().toLowerCase(), // Filtering by language
// //                 },
// //             });

// //             const languageMovies = languageResponse.data.results;

// //             if (languageMovies.length > 0) {
// //                 setMovies(languageMovies);
// //                 setError('');

// //                 // Save search data to sessionStorage
// //                 sessionStorage.setItem('directorSearchData', JSON.stringify({ query, movies: languageMovies }));
// //             } else {
// //                 setError('No movies found for the selected language');
// //                 setMovies([]);
// //                 sessionStorage.removeItem('directorSearchData');
// //             }
// //         } catch (err) {
// //             setError('An error occurred while fetching data');
// //             setMovies([]);
// //             sessionStorage.removeItem('directorSearchData');
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     const handleMovieClick = (movieId) => {
// //         navigate(`/movie/${movieId}`);
// //     };

// //     return (
// //         <div className='director-container'>
// //             <h1 className="text-center">Search By Language</h1>
// //             <SearchBar
// //                 query={query}
// //                 setQuery={setQuery}
// //                 handleSearch={handleSearch}
// //                 placeholder={"Enter language code (e.g., en, es, fr)"}
// //             />
// //             {loading && <p id="alt-text">Loading...</p>}
// //             {error && <p>{error}</p>}
// //             <div className="movie-results mt-4">
// //                 {movies.length > 0 ? (
// //                     <ul className="list-group">
// //                         {movies.map((movie) => (
// //                             <Cards key={movie.id} movie={movie} onClick={handleMovieClick} />
// //                         ))}
// //                     </ul>
// //                 ) : (!loading && <p id='alt-text'>No movies found. Try searching for another language!</p>)}
// //             </div>
// //         </div>
// //     )
// // };

// // export default DirectorSearch;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// // import "../Styles/DirectorSearch.css";
// import SearchBar from '../components/SearchBar';
// import Cards from '../components/Cards';

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = "https://api.themoviedb.org/3";

// // Language mapping for common languages
// const languageMapping = {
//     "english": "en",
//     "hindi": "hi",
//     "telugu": "te",
//     "tamil": "ta",
//     "spanish": "es",
//     "french": "fr",
//     "german": "de",
//     "portuguese": "pt",
//     "italian": "it",
//     // Add more languages as needed
// };

// const DirectorSearch = () => {
//     const [query, setQuery] = useState(''); // Query state to handle language or director name
//     const [movies, setMovies] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Retrieve search data from sessionStorage
//         const savedSearchData = sessionStorage.getItem('directorSearchData');
//         if (savedSearchData) {
//             const { query, movies } = JSON.parse(savedSearchData);
//             setQuery(query);
//             setMovies(movies);
//         }
//     }, []);

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);

//         if (query.trim() === '') {
//             setError('Please enter a search query');
//             return;
//         }

//         // Map the entered language to the corresponding language code
//         const languageCode = languageMapping[query.trim().toLowerCase()];

//         if (!languageCode) {
//             setError('Please enter a valid language name (e.g., Telugu, Hindi, English)');
//             setMovies([]);
//             setLoading(false);
//             return;
//         }

//         try {
//             const languageResponse = await axios.get(`${API_URL}/discover/movie`, {
//                 params: {
//                     api_key: API_KEY,
//                     with_original_language: languageCode, // Using the language code for filtering
//                 },
//             });

//             const languageMovies = languageResponse.data.results;

//             if (languageMovies.length > 0) {
//                 setMovies(languageMovies);
//                 setError('');

//                 // Save search data to sessionStorage
//                 sessionStorage.setItem('directorSearchData', JSON.stringify({ query, movies: languageMovies }));
//             } else {
//                 setError('No movies found for the selected language');
//                 setMovies([]);
//                 sessionStorage.removeItem('directorSearchData');
//             }
//         } catch (err) {
//             setError('An error occurred while fetching data');
//             setMovies([]);
//             sessionStorage.removeItem('directorSearchData');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleMovieClick = (movieId) => {
//         navigate(`/movie/${movieId}`);
//     };

//     return (
//         <div className='director-container'>
//             <h1 className="text-center">Search By Language</h1>
//             <SearchBar
//                 query={query}
//                 setQuery={setQuery}
//                 handleSearch={handleSearch}
//                 placeholder={"Enter language name (e.g., Telugu, Hindi, English)"}
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
//                 ) : (!loading && <p id='alt-text'>No movies found. Try searching for another language!</p>)}
//             </div>
//         </div>
//     )
// };

// export default DirectorSearch ;


//css
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const DirectorSearch = () => {
    const [director, setDirector] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve search data from sessionStorage
        const savedSearchData = sessionStorage.getItem('directorSearchData');
        if (savedSearchData) {
            const { director, movies } = JSON.parse(savedSearchData);
            setDirector(director);
            setMovies(movies);
        }
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (director.trim() === '') {
            setError('Please enter a language');
            setLoading(false);
            return;
        }

        try {
            const personResponse = await axios.get(`${API_URL}/search/person`, {
                params: {
                    api_key: API_KEY,
                    query: director,
                },
            });

            const personId = personResponse.data.results[0]?.id;

            if (personId) {
                const creditsResponse = await axios.get(`${API_URL}/person/${personId}/movie_credits`, {
                    params: {
                        api_key: API_KEY,
                    },
                });

                const directedMovies = creditsResponse.data.crew.filter((movie) => movie.job === 'Director');

                setMovies(directedMovies);
                setError('');

                // Save search data to sessionStorage
                sessionStorage.setItem('directorSearchData', JSON.stringify({ director, movies: directedMovies }));
            } else {
                setError('Language not found');
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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-cyan-800 text-center mb-8">Search By Language</h1>
            <SearchBar
                query={director}
                setQuery={setDirector}
                handleSearch={handleSearch}
                placeholder="Enter director name"
            />
            {loading && <p className="text-xl text-gray-700 mt-4">Loading...</p>}
            {error && <p className="text-red-500 text-lg mt-4">{error}</p>}
            <div className="w-full max-w-screen-lg mt-8">
                {movies.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {movies.map((movie) => (
                            <Cards key={movie.id} movie={movie} onClick={handleMovieClick} />
                        ))}
                    </div>
                ) : (!loading && (
                    <p className="text-lg text-gray-600 text-center mt-4">No movies found. Try searching for another language!</p>
                ))}
            </div>
        </div>
    );
};

export default DirectorSearch;
