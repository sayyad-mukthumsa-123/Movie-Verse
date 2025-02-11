// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import axios from "axios";

// // // // // // const MovieRecommendations = ({ movieId }) => {
// // // // // //     const [recommendations, setRecommendations] = useState([]);

// // // // // //     useEffect(() => {
// // // // // //         if (movieId) {
// // // // // //             axios.get(`http://localhost:5000/recommendations/${movieId}`)
// // // // // //                 .then(response => setRecommendations(response.data))
// // // // // //                 .catch(error => console.error("Error fetching recommendations:", error));
// // // // // //         }
// // // // // //     }, [movieId]);

// // // // // //     return (
// // // // // //         <div>
// // // // // //             <h2>Recommended Movies</h2>
// // // // // //             <div className="movie-grid">
// // // // // //                 {recommendations.map(movie => (
// // // // // //                     <div key={movie.id} className="movie-card">
// // // // // //                         <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
// // // // // //                         <h3>{movie.title}</h3>
// // // // // //                     </div>
// // // // // //                 ))}
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default MovieRecommendations;


// // // // // import axios from 'axios';
// // // // // import { useEffect, useState } from 'react';

// // // // // const MovieRecommendations = ({ movieId }) => {
// // // // //   const [recommendations, setRecommendations] = useState([]);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     if (!movieId) {
// // // // //       setError('Invalid movie ID');
// // // // //       return;
// // // // //     }

// // // // //     const fetchRecommendations = async () => {
// // // // //       try {
// // // // //         console.log('Fetching recommendations for movieId:', movieId);
// // // // //         //const response = await axios.get(`http://localhost:5000/api/recommendations?movieId=${movieId}`);
// // // // //         const response = await axios.get(`http://localhost:5000/api/recommendations/${movieId}`);

// // // // //         setRecommendations(response.data);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching recommendations:', error);
// // // // //         setError('Failed to fetch recommendations. Please try again later.');
// // // // //       }
// // // // //     };

// // // // //     fetchRecommendations();
// // // // //   }, [movieId]);

// // // // //   if (error) {
// // // // //     return <div className="text-red-500">{error}</div>;
// // // // //   }

// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Recommended Movies</h2>
// // // // //       <ul>
// // // // //         {recommendations.map((movie) => (
// // // // //           <li key={movie.id}>{movie.title}</li>
// // // // //         ))}
// // // // //       </ul>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MovieRecommendations;


// // // // //css
// // // // import axios from 'axios';
// // // // import { useEffect, useState } from 'react';

// // // // const MovieRecommendations = ({ movieId }) => {
// // // //   const [recommendations, setRecommendations] = useState([]);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     if (!movieId) {
// // // //       setError('Invalid movie ID');
// // // //       return;
// // // //     }

// // // //     const fetchRecommendations = async () => {
// // // //       try {
// // // //         console.log('Fetching recommendations for movieId:', movieId);
// // // //         //const response = await axios.get(`http://localhost:5000/api/recommendations?movieId=${movieId}`);
// // // //         const response = await axios.get(`http://localhost:5000/api/recommendations/${movieId}`);
        
// // // //         setRecommendations(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching recommendations:', error);
// // // //         setError('Failed to fetch recommendations. Please try again later.');
// // // //       }
// // // //     };

// // // //     fetchRecommendations();
// // // //   }, [movieId]);

// // // //   if (error) {
// // // //     return <div className="text-red-500 text-center py-4">{error}</div>;
// // // //   }

// // // //   return (
// // // //     <div className="max-w-4xl mx-auto p-4">
// // // //       <h2 className="text-xl font-semibold mb-4 text-center">Recommended Movies</h2>
// // // //       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // //         {recommendations.map((movie) => (
// // // //           <li key={movie.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition">
// // // //             <p className="text-white text-lg truncate">{movie.title}</p>
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MovieRecommendations;


// // // //adv-rec
// // // import axios from 'axios';
// // // import { useEffect, useState } from 'react';

// // // const MovieRecommendations = ({ movieId }) => {
// // //   const [recommendations, setRecommendations] = useState([]);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     if (!movieId) {
// // //       setError('Invalid movie ID');
// // //       return;
// // //     }

// // //     const fetchRecommendations = async () => {
// // //       try {
// // //         console.log('Fetching recommendations for movieId:', movieId);
// // //         const response = await axios.get(`http://localhost:5000/api/recommendations/${movieId}`);

// // //         if (response.data && response.data.length) {
// // //           setRecommendations(response.data);
// // //         } else {
// // //           setError('No recommendations found.');
// // //         }
// // //       } catch (error) {
// // //         console.error('Error fetching recommendations:', error);
// // //         setError('Failed to fetch recommendations. Please try again later.');
// // //       }
// // //     };

// // //     fetchRecommendations();
// // //   }, [movieId]);

// // //   if (error) {
// // //     return <div className="text-red-500 text-center py-4">{error}</div>;
// // //   }

// // //   return (
// // //     <div className="max-w-4xl mx-auto p-4">
// // //       <h2 className="text-xl font-semibold mb-4 text-center">Recommended Movies</h2>
// // //       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // //         {recommendations.map((movie) => (
// // //           <li key={movie.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition">
// // //             <p className="text-white text-lg truncate">{movie.title}</p>
// // //             <p className="text-gray-400 text-sm">{movie.overview.slice(0, 100)}...</p>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default MovieRecommendations;

// // //rec-genre
// // import axios from 'axios';
// // import { useEffect, useState } from 'react';

// // const MovieRecommendations = ({ movieId }) => {
// //   const [recommendations, setRecommendations] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     if (!movieId) {
// //       setError('Invalid movie ID');
// //       return;
// //     }

// //     const fetchRecommendations = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:5000/api/recommendations/${movieId}`);

// //         if (response.data && response.data.length) {
// //           setRecommendations(response.data);
// //         } else {
// //           setError('No recommendations found.');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching recommendations:', error);
// //         setError('Failed to fetch recommendations. Please try again later.');
// //       }
// //     };

// //     fetchRecommendations();
// //   }, [movieId]);

// //   if (error) {
// //     return <div className="text-red-500 text-center py-4">{error}</div>;
// //   }

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-4xl text-cyan-800 font-bold mb-4 text-center">Recommended Movies</h2>
// //       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
// //         {recommendations.map((movie) => (
// //           <li key={movie.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition">
// //             <p className="text-white text-lg truncate">{movie.title}</p>
// //             <p className="text-gray-400 text-sm">{movie.overview.slice(0, 100)}...</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default MovieRecommendations;


// //rec-detail
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const MovieRecommendations = ({ movieId }) => {
//   const [recommendations, setRecommendations] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!movieId) {
//       setError('Invalid movie ID');
//       return;
//     }

//     const fetchRecommendations = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/recommendations/${movieId}`);

//         if (response.data && response.data.length) {
//           setRecommendations(response.data);
//         } else {
//           setError('No recommendations found.');
//         }
//       } catch (error) {
//         console.error('Error fetching recommendations:', error);
//         setError('Failed to fetch recommendations. Please try again later.');
//       }
//     };

//     fetchRecommendations();
//   }, [movieId]);

//   if (error) {
//     return <div className="text-red-500 text-center py-4">{error}</div>;
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-4xl text-cyan-800 font-bold mb-4 text-center">Recommended Movies</h2>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//         {recommendations.map((movie) => (
//           <li key={movie.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition">
//             <Link to={`/movie/${movie.id}`} className="text-white">
//               <p className="text-lg truncate">{movie.title}</p>
//               <p className="text-gray-400 text-sm">{movie.overview.slice(0, 100)}...</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieRecommendations;


import { useNavigate } from 'react-router-dom';

const MovieRecommendations = ({ movieId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    if (!movieId) {
      setError('Invalid movie ID');
      return;
    }

    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/recommendations/${movieId}`);

        if (response.data && response.data.length) {
          setRecommendations(response.data);
        } else {
          setError('No recommendations found.');
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setError('Failed to fetch recommendations. Please try again later.');
      }
    };

    fetchRecommendations();
  }, [movieId]);

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  // Handle movie click and navigate to MovieDetail page
  const handleMovieClick = (movieId) => {
    navigate(`/details/${movieId}`); // Navigate to the movie details page
  };

  return (
    <div className="p-4">
      <h2 className="text-4xl text-cyan-800 font-bold mb-4 text-center">Recommended Movies</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {recommendations.map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition cursor-pointer"
            onClick={() => handleMovieClick(movie.id)} // Handle click to navigate
          >
            <p className="text-white text-lg truncate">{movie.title}</p>
            <p className="text-gray-400 text-sm">{movie.overview.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieRecommendations;
