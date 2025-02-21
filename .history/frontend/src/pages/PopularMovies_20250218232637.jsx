import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards'; // Import the Cards component

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [teluguResponse, hindiResponse, englishResponse] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=70&with_original_language=te&page=1`),
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=300&with_original_language=hi&page=1`),
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=150&with_original_language=en&page=1`),
        ]);

        const [teluguData, hindiData, englishData] = await Promise.all([
          teluguResponse.json(),
          hindiResponse.json(),
          englishResponse.json(),
        ]);

        const teluguMovies = teluguData.results.slice(0, 20);
        const hindiMovies = hindiData.results.slice(0, 20);
        const englishMovies = englishData.results.slice(0, 20);

        const allMovies = [...hindiMovies, ...teluguMovies, ...englishMovies];

        setMovies(allMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, [apiKey]);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="bg-slate-900 h-fit"> 
      <h1 className="text-4xl  font-bold text-center text-white mt-2">Popular Movies</h1>
      <div className="movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 ">
        {movies.length === 0 ? (
          <p className="text-xl text-gray-700 text-center">Loading movies...</p>
        ) : (
          movies.map((movie) => (
            <Cards key={movie.id} movie={movie} onClick={handleMovieClick} />
          ))
        )}
      </div>
    </div>
  );
};

export default PopularMovies;
