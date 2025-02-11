// // // import React, { useState, useEffect } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import Navbar from '../components/Navbar';
// // // import Cards from '../components/Cards';
// // // // import '../Styles/Home_Login.css';

// // // function Home_Login() {
// // //   const [showPopular, setShowPopular] = useState(false);
// // //   const [showTrending, setShowTrending] = useState(false);
// // //   const [movies, setMovies] = useState([]);
// // //   const apikey = process.env.REACT_APP_API_KEY;
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
    
// // //     const fetchMovies = async () => {
// // //       try {
// // //         const [teluguResponse, hindiResponse, englishResponse] = await Promise.all([
// // //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=50&with_original_language=te&page=1`),
// // //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=300&with_original_language=hi&page=1`),
// // //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=150&with_original_language=en&page=1`),
// // //         ]);

// // //         const [teluguData, hindiData, englishData] = await Promise.all([
// // //           teluguResponse.json(),
// // //           hindiResponse.json(),
// // //           englishResponse.json(),
// // //         ]);

// // //         // Limit each language's results to 10 movies
// // //         const teluguMovies = teluguData.results.slice(0, 20);
// // //         const hindiMovies = hindiData.results.slice(0, 20);
// // //         const englishMovies = englishData.results.slice(0, 20);

// // //         // Combine all movies
// // //         const allMovies = [
// // //           ...teluguMovies,
// // //           ...hindiMovies,
// // //           ...englishMovies,
// // //         ];

// // //         setMovies(allMovies); // Set all 30 movies
// // //       } catch (error) {
// // //         console.error('Error fetching movies:', error);
// // //         setMovies([]); // Set to empty array on error
// // //       }
// // //     };

// // //     fetchMovies();
// // //   }, []);

// // //   const handlePopularClick = () => {
// // //     setShowPopular(true);
// // //     setShowTrending(false);
// // //   };

// // //   const handleTrendingClick = () => {
// // //     setShowTrending(true);
// // //     setShowPopular(false);
// // //   };

// // //   const handleCardClick = (movieId) => {
// // //     navigate(`/movie/${movieId}`); // Navigate to the movie details page
// // //   };

// // //   return (
// // //     <div className="App">
// // //       <Navbar onPopularClick={handlePopularClick} onTrendingClick={handleTrendingClick} />
// // //       <div className="movies-content">
// // //         {!showPopular && !showTrending && (
// // //           <div className="movie-grid">
// // //             {movies.length > 0 ? (
// // //               movies.map(movie => (
// // //                 <Cards key={movie.id} movie={movie} onClick={handleCardClick} />
// // //               ))
// // //             ) : (
// // //               <p>No movies available</p>
// // //             )}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Home_Login;


// // //css
// // import React, { useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import Navbar from '../components/Navbar';
// // import Cards from '../components/Cards';

// // function Home() {
// //   const [showPopular, setShowPopular] = useState(false);
// //   const [showTrending, setShowTrending] = useState(false);
// //   const [movies, setMovies] = useState([]);
// //   const apikey = process.env.REACT_APP_API_KEY;
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchMovies = async () => {
// //       try {
// //         const [teluguResponse, hindiResponse, englishResponse] = await Promise.all([
// //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=50&with_original_language=te&page=1`),
// //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=300&with_original_language=hi&page=1`),
// //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=150&with_original_language=en&page=1`),
// //         ]);

// //         const [teluguData, hindiData, englishData] = await Promise.all([
// //           teluguResponse.json(),
// //           hindiResponse.json(),
// //           englishResponse.json(),
// //         ]);

// //         const teluguMovies = teluguData.results.slice(0, 20);
// //         const hindiMovies = hindiData.results.slice(0, 20);
// //         const englishMovies = englishData.results.slice(0, 20);

// //         const allMovies = [
// //           ...teluguMovies,
// //           ...hindiMovies,
// //           ...englishMovies,
// //         ];

// //         setMovies(allMovies);
// //       } catch (error) {
// //         console.error('Error fetching movies:', error);
// //         setMovies([]);
// //       }
// //     };

// //     fetchMovies();
// //   }, []);

// //   const handlePopularClick = () => {
// //     setShowPopular(true);
// //     setShowTrending(false);
// //   };

// //   const handleTrendingClick = () => {
// //     setShowTrending(true);
// //     setShowPopular(false);
// //   };

// //   const handleCardClick = (movieId) => {
// //     navigate(`/movie/${movieId}`);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <Navbar onPopularClick={handlePopularClick} onTrendingClick={handleTrendingClick} />
// //       <div className="max-w-screen-lg mx-auto p-4">
// //         <h1 className="text-center text-3xl font-bold text-cyan-800 my-6">Discover Movies</h1>
// //         {!showPopular && !showTrending && (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {movies.length > 0 ? (
// //               movies.map(movie => (
// //                 <Cards key={movie.id} movie={movie} onClick={handleCardClick} />
// //               ))
// //             ) : (
// //               <p className="text-center text-lg text-gray-600">No movies available</p>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Cards from '../components/Cards';

// function Home() {
//   const [showPopular, setShowPopular] = useState(false);
//   const [showTrending, setShowTrending] = useState(false);
//   const [movies, setMovies] = useState([]);
//   const apikey = process.env.REACT_APP_API_KEY;
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const [teluguResponse, hindiResponse, englishResponse] = await Promise.all([
//           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=50&with_original_language=te&page=1`),
//           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=300&with_original_language=hi&page=1`),
//           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=150&with_original_language=en&page=1`),
//         ]);

//         const [teluguData, hindiData, englishData] = await Promise.all([
//           teluguResponse.json(),
//           hindiResponse.json(),
//           englishResponse.json(),
//         ]);

//         const teluguMovies = teluguData.results.slice(0, 20);
//         const hindiMovies = hindiData.results.slice(0, 20);
//         const englishMovies = englishData.results.slice(0, 20);

//         const allMovies = [...teluguMovies, ...hindiMovies, ...englishMovies];

//         setMovies(allMovies);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//         setMovies([]);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const handlePopularClick = () => {
//     setShowPopular(true);
//     setShowTrending(false);
//   };

//   const handleTrendingClick = () => {
//     setShowTrending(true);
//     setShowPopular(false);
//   };

//   const handleCardClick = (movieId) => {
//     navigate(`/movie/${movieId}`);
//   };

//   return (
//     <>
//       <Navbar onPopularClick={handlePopularClick} onTrendingClick={handleTrendingClick} />
//       {/* <h1 className="text-4xl font-bold text-center text-cyan-800 mt-4 mb-4">Discover Movies</h1> */}
//       <div className="movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
//         {!showPopular && !showTrending && (
//           movies.length > 0 ? (
//             movies.map(movie => (
//               <Cards key={movie.id} movie={movie} onClick={handleCardClick} />
//             ))
//           ) : (
//             <p className="text-center text-lg text-gray-600">No movies available</p>
//           )
//         )}
//       </div>
//     </>
//   );
// }

// export default Home;


//refresh -login
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';

function Home() {
  const [showPopular, setShowPopular] = useState(false);
  const [showTrending, setShowTrending] = useState(false);
  const [movies, setMovies] = useState([]);
  const apikey = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  // Check if the user is logged in by checking the auth token in localStorage
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
      // If no auth token is found, redirect to the login page
      navigate('/login');
    } else {
      // If auth token exists, fetch the movies
      const fetchMovies = async () => {
        try {
          const [teluguResponse, hindiResponse, englishResponse] = await Promise.all([
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=50&with_original_language=te&page=1`),
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=300&with_original_language=hi&page=1`),
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_high.desc&vote_count.gte=150&with_original_language=en&page=1`),
          ]);

          const [teluguData, hindiData, englishData] = await Promise.all([
            teluguResponse.json(),
            hindiResponse.json(),
            englishResponse.json(),
          ]);

          const teluguMovies = teluguData.results.slice(0, 20);
          const hindiMovies = hindiData.results.slice(0, 20);
          const englishMovies = englishData.results.slice(0, 20);

          const allMovies = [...teluguMovies, ...hindiMovies, ...englishMovies];

          setMovies(allMovies);
        } catch (error) {
          console.error('Error fetching movies:', error);
          setMovies([]);
        }
      };

      fetchMovies();
    }
  }, [apikey, navigate]);

  const handlePopularClick = () => {
    setShowPopular(true);
    setShowTrending(false);
  };

  const handleTrendingClick = () => {
    setShowTrending(true);
    setShowPopular(false);
  };

  const handleCardClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <>
      <Navbar onPopularClick={handlePopularClick} onTrendingClick={handleTrendingClick} />
      <div className="movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        {!showPopular && !showTrending && (
          movies.length > 0 ? (
            movies.map(movie => (
              <Cards key={movie.id} movie={movie} onClick={handleCardClick} />
            ))
          ) : (
            <p className="text-center text-lg text-gray-600">No movies available</p>
          )
        )}
      </div>
    </>
  );
}

export default Home;
