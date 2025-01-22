import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
// import '../Styles/Home_Login.css';

function Home_Login() {
  const [showPopular, setShowPopular] = useState(false);
  const [showTrending, setShowTrending] = useState(false);
  const [movies, setMovies] = useState([]);
  const apikey = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    
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

        // Limit each language's results to 10 movies
        const teluguMovies = teluguData.results.slice(0, 20);
        const hindiMovies = hindiData.results.slice(0, 20);
        const englishMovies = englishData.results.slice(0, 20);

        // Combine all movies
        const allMovies = [
          ...teluguMovies,
          ...hindiMovies,
          ...englishMovies,
        ];

        setMovies(allMovies); // Set all 30 movies
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]); // Set to empty array on error
      }
    };

    fetchMovies();
  }, []);

  const handlePopularClick = () => {
    setShowPopular(true);
    setShowTrending(false);
  };

  const handleTrendingClick = () => {
    setShowTrending(true);
    setShowPopular(false);
  };

  const handleCardClick = (movieId) => {
    navigate(`/movie/${movieId}`); // Navigate to the movie details page
  };

  return (
    <div className="App">
      <Navbar onPopularClick={handlePopularClick} onTrendingClick={handleTrendingClick} />
      <div className="movies-content">
        {!showPopular && !showTrending && (
          <div className="movie-grid">
            {movies.length > 0 ? (
              movies.map(movie => (
                <Cards key={movie.id} movie={movie} onClick={handleCardClick} />
              ))
            ) : (
              <p>No movies available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home_Login;
