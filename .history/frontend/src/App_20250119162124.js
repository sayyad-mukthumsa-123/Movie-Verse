import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Home_Login from "./pages/Home_Login";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/MovieDetail";
import MovieSearch from "./pages/MovieSearch";
import PopularMovies from "./pages/PopularMovies";
import TrendingMovies from "./pages/TrendingMovies";
import DirectorSearch from "./pages/DirectorSearch";
import HeroSearch from "./pages/HeroSearch"
import HeroineSearch from "./pages/HeroineSearch"
import Search from "./pages/Search";
import GenreSearch from "./pages/GenreSearch";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/home_login' Component={Home_Login} />
          <Route path='/register' Component={Register} />
          <Route path='/login' Component={Login} />
          <Route path='/details' Component={Details} />
          <Route path='search/movie' Component={MovieSearch} />
          <Route path="movie/:id" Component={Details} />
          <Route path="/popular" Component={PopularMovies} />
          <Route path="/trending" Component={TrendingMovies} />
          <Route path="search/director" Component={DirectorSearch} />
          <Route path="search/hero" Component={<HeroSearch />} />
          <Route path="search/heroine" Component={<HeroineSearch />} />
          <Route path="/search" Component={<Search />} />
          <Route path="search/genre" Component={GenreSearch} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
