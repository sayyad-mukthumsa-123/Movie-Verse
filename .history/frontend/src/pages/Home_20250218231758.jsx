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

  useEffect(() => {
    // Check if token exists, if not, redirect to login
    const token = localStorage.getItem("token");
    console.log(token);
    
    if (!token) {
      navigate("/login"); // Redirect to login page if not authenticated
    }

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
  }, [navigate, apikey]); // Re-run the effect when `navigate` or `apikey` changes

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
      <div className="bg-slate-900 movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 hover:shadow-yellow-500 p-4">
        {!showPopular && !showTrending && (
          movies.length > 0 ? (
            movies.map(movie => (
              <Cards key={movie.id} movie={movie} onClick={handleCardClick} />
            ))
          ) : (
            <p className="text-center text-lg text-white">No movies available</p>
          )
        )}
      </div>
    </>
  );
}

export default Home;
