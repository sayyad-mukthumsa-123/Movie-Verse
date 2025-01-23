// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// // import '../Styles/MovieDetail.css';

// const MovieDetail = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [trailerUrl, setTrailerUrl] = useState('');
//   const [trailerError, setTrailerError] = useState('');
//   const [cast, setCast] = useState([]);
//   const [director, setDirector] = useState('');

//   const tmdbApiKey = process.env.REACT_APP_API_KEY;

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbApiKey}&language=en-US`);
//         setMovie(response.data);

//         // Fetch credits separately to get the director's name
//         const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${tmdbApiKey}`);
//         const director = creditsResponse.data.crew.find(person => person.job === 'Director');
//         if (director) {
//           setDirector(director.name);
//         }

//         fetchTrailer(id); // Fetch trailer using the TMDb movie ID
//         fetchCast(id); // Fetch cast using the TMDb movie ID
//       } catch (err) {
//         setError('An error occurred while fetching the movie details.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchTrailer = async (movieId) => {
//       try {
//         const videoResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${tmdbApiKey}&language=en-US`);
//         const trailer = videoResponse.data.results.find(video => video.type === 'Trailer');
//         if (trailer) {
//           setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
//         } else {
//           setTrailerError('No trailer found.');
//         }
//       } catch (err) {
//         setTrailerError('An error occurred while fetching the movie trailer.');
//       }
//     };

//     const fetchCast = async (movieId) => {
//       try {
//         const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${tmdbApiKey}`);
//         setCast(castResponse.data.cast);
//       } catch (err) {
//         setError(`An error occurred while fetching the cast details: ${err.message}`);
//       }
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="movie-detail-container">
//       {movie && (
//         <div>
//           <div className="movie-detail-header">
//             <div className="details">
//               <div className="movie-poster">
//                 <img
//                   id="poster"
//                   src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/400'}
//                   alt={movie.title}
//                 />
//               </div>
//               <h1 id="title">{movie.title}</h1>
//               <p>Released: {movie.release_date}</p>
//               <p>Genre: {movie.genres.map(genre => genre.name).join(', ')}</p>
//               <p>Director: {director}</p>
//               <p id="plot">Plot: {movie.overview}</p>
//             </div>
//           </div>

//           {/* Trailer Section */}
//           <div className="trailer-section">
//             <h2 id='title'>Trailer</h2>
//             {trailerUrl ? (
//               <iframe
//                 src={trailerUrl}
//                 title="YouTube video player"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             ) : (
//               <p>{trailerError || 'Loading trailer...'}</p>
//             )}
//           </div>

//           {/* Cast Section */}
//           {cast.length > 0 && (
//             <div className="cast-section">
//               <h2 id="title">Cast</h2>
//               <div className="cast-details">
//                 {cast
//                   .filter(actor => actor.profile_path)
//                   .map(actor => (
//                     <div key={actor.id} className="cast-member">
//                       <img
//                         src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
//                         alt={actor.name}
//                       />
//                       <p>{actor.name}</p>
//                       <p>{actor.character}</p>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieDetail;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [trailerError, setTrailerError] = useState('');
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState('');

  const tmdbApiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbApiKey}&language=en-US`);
        setMovie(response.data);

        const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${tmdbApiKey}`);
        const director = creditsResponse.data.crew.find(person => person.job === 'Director');
        if (director) {
          setDirector(director.name);
        }

        fetchTrailer(id);
        fetchCast(id);
      } catch (err) {
        setError('An error occurred while fetching the movie details.');
      } finally {
        setLoading(false);
      }
    };

    const fetchTrailer = async (movieId) => {
      try {
        const videoResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${tmdbApiKey}&language=en-US`);
        const trailer = videoResponse.data.results.find(video => video.type === 'Trailer');
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        } else {
          setTrailerError('No trailer found.');
        }
      } catch (err) {
        setTrailerError('An error occurred while fetching the movie trailer.');
      }
    };

    const fetchCast = async (movieId) => {
      try {
        const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${tmdbApiKey}`);
        setCast(castResponse.data.cast);
      } catch (err) {
        setError(`An error occurred while fetching the cast details: ${err.message}`);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p className="text-center py-4">Loading...</p>;
  if (error) return <p className="text-center py-4">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      {movie && (
        <div>
          {/* Movie Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 mb-8">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/400'}
                alt={movie.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold text-cyan-800 mt-10 mb-10">{movie.title}</h1>
              <p className="text-2xl font-semibold text-gray-800 mb-2">Released : {movie.release_date}</p>
              <p className="text-2xl font-semibold text-gray-800 mb-2">Genre : {movie.genres.map(genre => genre.name).join(', ')}</p>
              <p className="text-2xl font-semibold text-gray-800 mb-10">Director : {director}</p>
              {/* <p className="text-lg text-gray-800">Overview:  {movie.overview}</p> */}
              <div className="mb-4">
                <p className="text-3xl font-semibold text-cyan-800 mb-2">Overview :</p>
                <p className="text-2xl font-semibold text-gray-800 text-justify">{movie.overview}</p>
              </div>
            </div>
          </div>

          {/* Trailer Section */}
          <div className="mb-8">
            <h2 className="text-3xl text-center font-semibold text-cyan-800 mb-4">Trailer</h2>
            {trailerUrl ? (
              <div className="w-full h-[550px]">
                <iframe
                  src={trailerUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            ) : (
              <p className="text-gray-700">{trailerError || 'Loading trailer...'}</p>
            )}
          </div>

          {/* Cast Section */}
          {cast.length > 0 && (
            <div>
              <h2 className="text-3xl font-semibold text-center mt-10 text-cyan-800 mb-4">Cast</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {cast
                  .filter(actor => actor.profile_path)
                  .map(actor => (
                    <div key={actor.id} className="text-center">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                        alt={actor.name}
                        className="w-48 h-48 object-cover rounded-full mx-auto mb-2"
                      />
                      <p className="text-2xl font-semibold">{actor.name}</p>
                      <p className="text-xl text-gray-600">{actor.character}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
