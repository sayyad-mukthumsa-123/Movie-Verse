import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import axios from 'axios';
import MovieRecommendations from './MovieRecommendations';

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
  const navigate = useNavigate();

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
    <div className="container  bg-slate-900 text-slate-50 mx-auto px-4 py-6">
      <div className="absolute top-6 left-6 cursor-pointer p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition">
        <FaHome size={32} onClick={() => navigate('/home_login')} />
        {/* Use FaHome if you imported FontAwesome */}
      </div>
      {movie && (
        <div>
          {/* Movie Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 mb-8">
            <div className="w-full md:w-1/3 m-4 md:mb-0">
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/400'}
                alt={movie.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mt-10 mb-10">{movie.title}</h1>
              <p className="text-2xl font-semibold text-slate-200 mb-2">Released : {movie.release_date}</p>
              <p className="text-2xl font-semibold text-slate-200 mb-2">Genre : {movie.genres.map(genre => genre.name).join(', ')}</p>
              <p className="text-2xl font-semibold text-slate-200 mb-10">Director : {director}</p>
              {/* <p className="text-lg text-gray-800">Overview:  {movie.overview}</p> */}
              <div className="mb-4">
                <p className="text-3xl font-semibold text-slate-50 mb-8">Overview :</p>
                <p className="text-2xl font-semibold text-slate-200 text-justify">{movie.overview}</p>
              </div>
            </div>
          </div>

          {/* Trailer Section */}
          <div className="mb-8">
            <h2 className="text-4xl text-center font-bold  text-cyan-700 bg-slate-50 p-3 mt-20 mb-3 rounded-lg">Trailer</h2>
            {trailerUrl ? (
              <div className="w-full h-[550px]">
                <iframe
                  src={trailerUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg outline"
                ></iframe>
              </div>
            ) : (
              <p className="text-gray-700">{trailerError || 'Loading trailer...'}</p>
            )}
          </div>

          {/* Cast Section */}
          {cast.length > 0 && (
            <div>
              <h2 className="text-4xl font-bold text-center mt-20 text-cyan-700 bg-slate-50 p-3 mb-3 rounded-lg">Cast</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  outline p-3 rounded-lg gap-6">
                {cast
                  .filter(actor => actor.profile_path)
                  .map(actor => (
                    <div key={actor.id} className="text-center">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                        alt={actor.name}
                        className="w-48 h-48 object-cover outline rounded-full mx-auto mb-2"
                      />
                      <p className="text-2xl font-semibold">{actor.name}</p>
                      <p className="text-xl text-slate-200">Character : {actor.character}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
      <h2 className="text-4xl w-full font-bold text-center mt-20 text-cyan-700 bg-slate-50 p-3 mb-3 rounded-lg">Recommended Movies</h2>
      <MovieRecommendations movieId={movie.id} />
    </div>
  );
};


export default MovieDetail;
