// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Home_Login from "./pages/Home_Login";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Details from "./pages/MovieDetail";
// import MovieSearch from "./pages/MovieSearch";
// import PopularMovies from "./pages/PopularMovies";
// import TrendingMovies from "./pages/TrendingMovies";
// import DirectorSearch from "./pages/DirectorSearch";
// import HeroSearch from "./pages/HeroSearch"
// import HeroineSearch from "./pages/HeroineSearch"
// import Search from "./pages/Search";
// import GenreSearch from "./pages/GenreSearch";
// import LangSearch from "./pages/LangSearch"

// const App = () => {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' Component={Home} />
//           <Route path='/home_login' Component={Home_Login} />
//           <Route path='/register' Component={Register} />
//           <Route path='/login' Component={Login} />
//           <Route path='/details' Component={Details} />
//           <Route path='search/movie' Component={MovieSearch} />
//           <Route path="movie/:id" Component={Details} />
//           <Route path="/popular" Component={PopularMovies} />
//           <Route path="/trending" Component={TrendingMovies} />
//           <Route path="search/director" Component={DirectorSearch} />
//           <Route path="search/hero" element={<HeroSearch />} />
//           <Route path="search/heroine" element={<HeroineSearch />} />
//           <Route path="/search" element={<Search />} />
//           <Route path="search/genre" Component={GenreSearch} />
//           <Route path="search/lang" Component={LangSearch} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



//for routr after auth
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
import HeroSearch from "./pages/HeroSearch";
import HeroineSearch from "./pages/HeroineSearch";
import Search from "./pages/Search";
import GenreSearch from "./pages/GenreSearch";
import LangSearch from "./pages/LangSearch";

const ProtectedRoute = ({ component: Component }) => {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" />;
  }
  return <Component />;
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home_login' element={<ProtectedRoute component={Home_Login} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/details' element={<ProtectedRoute component={Details} />} />
          <Route path='/popular' element={<ProtectedRoute component={PopularMovies} />} />
          <Route path='/trending' element={<ProtectedRoute component={TrendingMovies} />} />
          <Route path='search/movie' element={<ProtectedRoute component={MovieSearch} />} />
          <Route path="movie/:id" element={<ProtectedRoute component={Details} />} />
          <Route path="search/director" element={<ProtectedRoute component={DirectorSearch} />} />
          <Route path="search/hero" element={<ProtectedRoute component={HeroSearch} />} />
          <Route path="search/heroine" element={<ProtectedRoute component={HeroineSearch} />} />
          <Route path="/search" element={<ProtectedRoute component={Search} />} />
          <Route path="search/genre" element={<ProtectedRoute component={GenreSearch} />} />
          <Route path="search/lang" element={<ProtectedRoute component={LangSearch} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
