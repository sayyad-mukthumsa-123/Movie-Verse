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



// //for routr after auth


import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home_login' element={<PrivateRoute><Home_Login /></PrivateRoute>} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/details' element={<PrivateRoute><Details /></PrivateRoute>} />
                    <Route path='search/movie' element={<PrivateRoute><MovieSearch /></PrivateRoute>} />
                    <Route path="movie/:id" element={<PrivateRoute><Details /></PrivateRoute>} />
                    <Route path="/popular" element={<PrivateRoute><PopularMovies /></PrivateRoute>} />
                    <Route path="/trending" element={<PrivateRoute><TrendingMovies /></PrivateRoute>} />
                    <Route path='search/director' element={<PrivateRoute><DirectorSearch /></PrivateRoute>} />
                    <Route path='search/hero' element={<PrivateRoute><HeroSearch /></PrivateRoute>} />
                    <Route path='search/heroine' element={<PrivateRoute><HeroineSearch /></PrivateRoute>} />
                    <Route path='/search' element={<PrivateRoute><Search /></PrivateRoute>} />
                    <Route path='search/genre' element={<PrivateRoute><GenreSearch /></PrivateRoute>} />
                    <Route path='search/lang' element={<PrivateRoute><LangSearch /></PrivateRoute>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;