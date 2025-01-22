// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Home from "./pages/Home";
// // import Home_Login from "./pages/Home_Login";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import Details from "./pages/MovieDetail";
// // import MovieSearch from "./pages/MovieSearch";
// // import PopularMovies from "./pages/PopularMovies";
// // import TrendingMovies from "./pages/TrendingMovies";
// // import DirectorSearch from "./pages/DirectorSearch";
// // import HeroSearch from "./pages/HeroSearch"
// // import HeroineSearch from "./pages/HeroineSearch"
// // import Search from "./pages/Search";
// // import GenreSearch from "./pages/GenreSearch";
// // import LangSearch from "./pages/LangSearch"

// // const App = () => {
// //   return (
// //     <div className="App">
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path='/' Component={Home} />
// //           <Route path='/home_login' Component={Home_Login} />
// //           <Route path='/register' Component={Register} />
// //           <Route path='/login' Component={Login} />
// //           <Route path='/details' Component={Details} />
// //           <Route path='search/movie' Component={MovieSearch} />
// //           <Route path="movie/:id" Component={Details} />
// //           <Route path="/popular" Component={PopularMovies} />
// //           <Route path="/trending" Component={TrendingMovies} />
// //           <Route path="search/director" Component={DirectorSearch} />
// //           <Route path="search/hero" element={<HeroSearch />} />
// //           <Route path="search/heroine" element={<HeroineSearch />} />
// //           <Route path="/search" element={<Search />} />
// //           <Route path="search/genre" Component={GenreSearch} />
// //           <Route path="search/lang" Component={LangSearch} />
// //         </Routes>
// //       </BrowserRouter>
// //     </div>
// //   );
// // }

// // export default App;



// // //for routr after auth


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
// import HeroSearch from "./pages/HeroSearch";
// import HeroineSearch from "./pages/HeroineSearch";
// import Search from "./pages/Search";
// import GenreSearch from "./pages/GenreSearch";
// import LangSearch from "./pages/LangSearch";
// import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
// import ProfilePage from "./pages/ProfilePage";

// const App = () => {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/profile/:email" component={ProfilePage} />
//           {/* Protected Routes */}
//           <Route
//             path="/home_login"
//             element={
//               <ProtectedRoute>
//                 <Home_Login />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/details"
//             element={
//               <ProtectedRoute>
//                 <Details />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/popular"
//             element={
//               <ProtectedRoute>
//                 <PopularMovies />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/trending"
//             element={
//               <ProtectedRoute>
//                 <TrendingMovies />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/search/movie"
//             element={
//               <ProtectedRoute>
//                 <MovieSearch />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/search/director"
//             element={
//               <ProtectedRoute>
//                 <DirectorSearch />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/search/hero"
//             element={
//               <ProtectedRoute>
//                 <HeroSearch />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/search/heroine"
//             element={
//               <ProtectedRoute>
//                 <HeroineSearch />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/search/genre"
//             element={
//               <ProtectedRoute>
//                 <GenreSearch />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/search/lang"
//             element={
//               <ProtectedRoute>
//                 <LangSearch />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/search"
//             element={
//               <ProtectedRoute>
//                 <Search />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/movie/:id"
//             element={
//               <ProtectedRoute>
//                 <Details />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/profile"
//             element={
//               <ProtectedRoute>
//                 <Route path="/profile/:email" element={<ProfilePage />} />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;


//profile-get
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
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import ProfilePage from "./pages/ProfilePage"; // ProfilePage component
import UpdateProfile from "./pages/UpdateProfile";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  return (
    <div className="App">
      <div className="bg-blue-500 text-black p-4">Test Tailwind CSS</div>

      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Route for Profile Page with dynamic email */}
          <Route path="/profile/:email" element={<ProfilePage />} /> {/* Correct dynamic route */}

          {/* Protected Routes */}
          <Route
            path="/home_login"
            element={
              <ProtectedRoute>
                <Home_Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
          <Route
            path="/popular"
            element={
              <ProtectedRoute>
                <PopularMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trending"
            element={
              <ProtectedRoute>
                <TrendingMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search/movie"
            element={
              <ProtectedRoute>
                <MovieSearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search/director"
            element={
              <ProtectedRoute>
                <DirectorSearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search/hero"
            element={
              <ProtectedRoute>
                <HeroSearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search/heroine"
            element={
              <ProtectedRoute>
                <HeroineSearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search/genre"
            element={
              <ProtectedRoute>
                <GenreSearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search/lang"
            element={
              <ProtectedRoute>
                <LangSearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
          <Route path="api/profile/:email" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>}
          />
          <Route path="/update-profile/:email" element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>}
          />
          <Route path="/reset-password/:email" element={
            <ProtectedRoute>
            <ResetPassword />
            </ProtectedRoute>} 
            />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
