// // // // // // // // import React from 'react';
// // // // // // // // import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// // // // // // // // import '../Styles/Navbar.css';

// // // // // // // // const Navbar = ({ onPopularClick, onTrendingClick }) => {
// // // // // // // //   const navigate = useNavigate(); 
  
// // // // // // // //   const handleLogout = () => {
// // // // // // // //     navigate('/login');
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <nav className="navbar">
// // // // // // // //       <div className="nav-links">
// // // // // // // //         <Link to="/popular" onClick={onPopularClick} className='nav-link'>Popular Movies</Link>
// // // // // // // //         <Link to="/trending" onClick={onTrendingClick} className='nav-link'>Trending Movies</Link>
// // // // // // // //         <Link to="/search" className='nav-link'>Search</Link> 
// // // // // // // //       </div>
// // // // // // // //       <div className="logout">
// // // // // // // //         <button onClick={handleLogout} className="logout-button">Logout</button> 
// // // // // // // //       </div>
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Navbar;



// // // // // // // //for logout
// // // // // // // import React from 'react';
// // // // // // // import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// // // // // // // import '../Styles/Navbar.css';

// // // // // // // const Navbar = ({ onPopularClick, onTrendingClick }) => {
// // // // // // //   const navigate = useNavigate(); 
  
// // // // // // //   // Logout function to remove token and navigate to the login page
// // // // // // //   const handleLogout = () => {
// // // // // // //     localStorage.removeItem('token'); // Remove the token from localStorage
// // // // // // //     navigate('/login'); // Redirect to login page after logout
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <nav className="navbar">
// // // // // // //       <div className="nav-links">
// // // // // // //         <Link to="/popular" onClick={onPopularClick} className='nav-link'>Popular Movies</Link>
// // // // // // //         <Link to="/trending" onClick={onTrendingClick} className='nav-link'>Trending Movies</Link>
// // // // // // //         <Link to="/search" className='nav-link'>Search</Link> 
// // // // // // //       </div>
// // // // // // //       <div className="logout">
// // // // // // //         <button onClick={handleLogout} className="logout-button">Logout</button> 
// // // // // // //       </div>
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navbar;



// // // // // // //profile-get
// // // // // // import React from 'react';
// // // // // // import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// // // // // // // import '../Styles/Navbar.css';

// // // // // // const Navbar = ({ onPopularClick, onTrendingClick }) => {
// // // // // //   const navigate = useNavigate();
  
// // // // // //   // Assuming email is stored in localStorage after user login
// // // // // //   const userEmail = localStorage.getItem('email'); // Retrieve user's email (adjust as per your setup)

// // // // // //   // Logout function to remove token and navigate to the login page
// // // // // //   const handleLogout = () => {
// // // // // //     localStorage.removeItem('token'); // Remove the token from localStorage
// // // // // //     localStorage.removeItem('userEmail'); // Remove the email as well (if stored)
// // // // // //     navigate('/login'); // Redirect to login page after logout
// // // // // //   };

// // // // // //   return (
// // // // // //     <nav className="navbar">
// // // // // //       <div className="nav-links">
// // // // // //         <Link to="/popular" onClick={onPopularClick} className='nav-link'>Popular Movies</Link>
// // // // // //         <Link to="/trending" onClick={onTrendingClick} className='nav-link'>Trending Movies</Link>
// // // // // //         <Link to="/search" className='nav-link'>Search</Link> 
// // // // // //         {/* Profile Link */}
// // // // // //         {userEmail && (
// // // // // //           <Link to={`../api/profile/${userEmail}`} className='nav-link'>Profile</Link>
// // // // // //         )}
// // // // // //       </div>
// // // // // //       <div className="logout">
// // // // // //         <button onClick={handleLogout} className="logout-button">Logout</button> 
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;


// // // // // // css-res

// // // // // import React from 'react';
// // // // // import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// // // // // const Navbar = ({ onPopularClick, onTrendingClick }) => {
// // // // //   const navigate = useNavigate();
  
// // // // //   // Assuming email is stored in localStorage after user login
// // // // //   const userEmail = localStorage.getItem('email'); // Retrieve user's email (adjust as per your setup)

// // // // //   // Logout function to remove token and navigate to the login page
// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem('token'); // Remove the token from localStorage
// // // // //     localStorage.removeItem('userEmail'); // Remove the email as well (if stored)
// // // // //     navigate('/login'); // Redirect to login page after logout
// // // // //   };

// // // // //   return (
// // // // //     <nav className="bg-cyan-800 p-4 shadow-md">
// // // // //       <div className="container mx-auto flex items-center justify-between">
// // // // //         <div className="flex space-x-10">
// // // // //           <Link 
// // // // //             to="/popular" 
// // // // //             onClick={onPopularClick} 
// // // // //             className="text-white text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// // // // //           >
// // // // //             Popular Movies
// // // // //           </Link>
// // // // //           <Link 
// // // // //             to="/trending" 
// // // // //             onClick={onTrendingClick} 
// // // // //             className="text-white text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300 "
// // // // //           >
// // // // //             Trending Movies
// // // // //           </Link>
// // // // //           <Link 
// // // // //             to="/search" 
// // // // //             className="text-white  text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// // // // //           >
// // // // //             Search
// // // // //           </Link>
// // // // //           {/* Profile Link */}
// // // // //           {userEmail && (
// // // // //             <Link 
// // // // //               to={`../api/profile/${userEmail}`} 
// // // // //               className="text-white text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// // // // //             >
// // // // //               Profile
// // // // //             </Link>
// // // // //           )}
// // // // //         </div>
// // // // //         <div>
// // // // //           <button
// // // // //             onClick={handleLogout}
// // // // //             className="text-white text-2xl font-semibold bg-red-600 hover:bg-red-500 hover:scale-110 py-2 px-4 rounded-md transition-transform duration-300"
// // // // //           >
// // // // //             Logout
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;


// // // // //res
// // // // import React, { useState } from 'react';
// // // // import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// // // // const Navbar = ({ onPopularClick, onTrendingClick }) => {
// // // //   const navigate = useNavigate();
  
// // // //   // Assuming email is stored in localStorage after user login
// // // //   const userEmail = localStorage.getItem('email'); // Retrieve user's email (adjust as per your setup)

// // // //   // Logout function to remove token and navigate to the login page
// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem('token'); // Remove the token from localStorage
// // // //     localStorage.removeItem('userEmail'); // Remove the email as well (if stored)
// // // //     navigate('/login'); // Redirect to login page after logout
// // // //   };

// // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // // //   return (
// // // //     <nav className="bg-cyan-800 p-4 shadow-md">
// // // //       <div className="container mx-auto flex items-center justify-between">
// // // //         {/* Logo and Hamburger Menu */}
// // // //         <div className="flex items-center justify-between w-full sm:w-auto">
          

// // // //           {/* Hamburger Icon for small screens */}
// // // //           <button 
// // // //             className="text-white sm:hidden"
// // // //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// // // //           >
// // // //             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
// // // //             </svg>
// // // //           </button>
// // // //         </div>

// // // //         {/* Navbar Links */}
// // // //         <div className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:block space-x-10`}>
// // // //           <Link 
// // // //             to="/popular" 
// // // //             onClick={onPopularClick} 
// // // //             className="text-white text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// // // //           >
// // // //             Popular Movies
// // // //           </Link>
// // // //           <Link 
// // // //             to="/trending" 
// // // //             onClick={onTrendingClick} 
// // // //             className="text-white text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300 "
// // // //           >
// // // //             Trending Movies
// // // //           </Link>
// // // //           <Link 
// // // //             to="/search" 
// // // //             className="text-white text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// // // //           >
// // // //             Search
// // // //           </Link>
// // // //           {/* Profile Link */}
// // // //           {userEmail && (
// // // //             <Link 
// // // //               to={`../api/profile/${userEmail}`} 
// // // //               className="text-white text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// // // //             >
// // // //               Profile
// // // //             </Link>
// // // //           )}
// // // //         </div>

// // // //         {/* Logout Button */}
// // // //         <div className="hidden sm:block">
// // // //           <button
// // // //             onClick={handleLogout}
// // // //             className="text-white text-2xl font-semibold bg-red-600 hover:bg-red-500 hover:scale-110 py-2 px-4 rounded-md transition-transform duration-300"
// // // //           >
// // // //             Logout
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // //res-2
// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// // // const Navbar = ({ onPopularClick, onTrendingClick }) => {
// // //   const navigate = useNavigate();
  
// // //   // Assuming email is stored in localStorage after user login
// // //   const userEmail = localStorage.getItem('email'); // Retrieve user's email (adjust as per your setup)

// // //   // Logout function to remove token and navigate to the login page
// // //   const handleLogout = () => {
// // //     localStorage.removeItem('token'); // Remove the token from localStorage
// // //     localStorage.removeItem('userEmail'); // Remove the email as well (if stored)
// // //     navigate('/login'); // Redirect to login page after logout
// // //   };

// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //   return (
// // //     <nav className="bg-cyan-800 p-4 shadow-md">
// // //       <div className="container mx-auto flex items-center justify-between">
// // //         {/* Logo and Hamburger Menu */}
// // //         <div className="flex items-center justify-between w-full sm:w-auto">
// // //           {/* Hamburger Icon for small screens */}
// // //           <button 
// // //             className="text-white sm:hidden"
// // //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// // //           >
// // //             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
// // //             </svg>
// // //           </button>
// // //         </div>

// // //         {/* Navbar Links */}
// // //         <div className={`sm:flex ${isMenuOpen ? 'flex-col space-y-4' : 'hidden'} sm:block sm:flex-row sm:space-y-0 sm:space-x-10`}>
// // //           <Link 
// // //             to="/popular" 
// // //             onClick={onPopularClick} 
// // //             className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// // //           >
// // //             Popular
// // //           </Link>
// // //           <Link 
// // //             to="/trending" 
// // //             onClick={onTrendingClick} 
// // //             className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300 "
// // //           >
// // //             Trending
// // //           </Link>
// // //           <Link 
// // //             to="/search" 
// // //             className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// // //           >
// // //             Search
// // //           </Link>
// // //           {/* Profile Link */}
// // //           {userEmail && (
// // //             <Link 
// // //               to={`../api/profile/${userEmail}`} 
// // //               className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// // //             >
// // //               Profile
// // //             </Link>
// // //           )}
// // //         </div>

// // //         {/* Logout Button */}
// // //         <div className="hidden sm:block">
// // //           <button
// // //             onClick={handleLogout}
// // //             className="text-white text-2xl font-semibold bg-red-600 hover:bg-red-500 hover:scale-110 py-2 px-4 rounded-md transition-transform duration-300"
// // //           >
// // //             Logout
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;



// // //logout-window close
// // import React, { useEffect, useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Navbar = ({ onPopularClick, onTrendingClick }) => {
// //   const navigate = useNavigate();

// //   // Assuming email is stored in localStorage after user login
// //   const userEmail = localStorage.getItem('email'); // Retrieve user's email (adjust as per your setup)

// //   // Logout function to remove token and navigate to the login page
// //   const handleLogout = () => {
// //     localStorage.removeItem('token'); // Remove the token from localStorage
// //     localStorage.removeItem('email'); // Remove the email as well (if stored)
// //     navigate('/login'); // Redirect to login page after logout
// //   };

// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   // Logout user when browser window is closed
// //   useEffect(() => {
// //     const handleWindowClose = () => {
// //       localStorage.removeItem('token');
// //       localStorage.removeItem('email');
// //     };

// //     window.addEventListener('beforeunload', handleWindowClose);

// //     return () => {
// //       window.removeEventListener('beforeunload', handleWindowClose);
// //     };
// //   }, []);

// //   return (
// //     <nav className="bg-cyan-800 p-4 shadow-md">
// //       <div className="container mx-auto flex items-center justify-between">
// //         {/* Logo and Hamburger Menu */}
// //         <div className="flex items-center justify-between w-full sm:w-auto">
// //           {/* Hamburger Icon for small screens */}
// //           <button 
// //             className="text-white sm:hidden"
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //           >
// //             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
// //             </svg>
// //           </button>
// //         </div>

// //         {/* Navbar Links */}
// //         <div className={`sm:flex ${isMenuOpen ? 'flex-col space-y-4' : 'hidden'} sm:block sm:flex-row sm:space-y-0 sm:space-x-10`}>
// //           <Link 
// //             to="/popular" 
// //             onClick={onPopularClick} 
// //             className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// //           >
// //             Popular
// //           </Link>
// //           <Link 
// //             to="/trending" 
// //             onClick={onTrendingClick} 
// //             className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// //           >
// //             Trending
// //           </Link>
// //           <Link 
// //             to="/search" 
// //             className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// //           >
// //             Search
// //           </Link>
// //           {/* Profile Link */}
// //           {userEmail && (
// //             <Link 
// //               to={`../api/profile/${userEmail}`} 
// //               className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
// //             >
// //               Profile
// //             </Link>
// //           )}
// //         </div>

// //         {/* Logout Button */}
// //         <div className="hidden sm:block">
// //           <button
// //             onClick={handleLogout}
// //             className="text-white text-2xl font-semibold bg-red-600 hover:bg-red-500 hover:scale-110 py-2 px-4 rounded-md transition-transform duration-300"
// //           >
// //             Logout
// //           </button>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// //separated logout
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Logout from './Logout'; // Import the LogoutButton component

// const Navbar = ({ onPopularClick, onTrendingClick }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Assuming email is stored in localStorage after user login
//   const userEmail = localStorage.getItem('email'); // Retrieve user's email (adjust as per your setup)

//   useEffect(() => {
//     const handleWindowClose = () => {
//       localStorage.removeItem('token');
//       localStorage.removeItem('email');
//     };

//     window.addEventListener('beforeunload', handleWindowClose);

//     return () => {
//       window.removeEventListener('beforeunload', handleWindowClose);
//     };
//   }, []);

//   return (
//     <nav className="bg-cyan-800 p-4 shadow-md">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo and Hamburger Menu */}
//         <div className="flex items-center justify-between w-full sm:w-auto">
//           {/* Hamburger Icon for small screens */}
//           <button 
//             className="text-white sm:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>

//         {/* Navbar Links */}
//         <div className={`sm:flex ${isMenuOpen ? 'flex-col space-y-4' : 'hidden'} sm:block sm:flex-row sm:space-y-0 sm:space-x-10`}>
//           <Link 
//             to="/popular" 
//             onClick={onPopularClick} 
//             className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
//           >
//             Popular
//           </Link>
//           <Link 
//             to="/trending" 
//             onClick={onTrendingClick} 
//             className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
//           >
//             Trending
//           </Link>
//           <Link 
//             to="/search" 
//             className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
//           >
//             Search
//           </Link>
//           {/* Profile Link */}
//           {userEmail && (
//             <Link 
//               to={`../api/profile/${userEmail}`} 
//               className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
//             >
//               Profile
//             </Link>
//           )}
//         </div>

//         {/* Logout Button */}
//         <div className="hidden sm:block">
//           <Logout /> {/* Use the new LogoutButton component */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


//ref-err
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout'; // Import the LogoutButton component

const Navbar = ({ onPopularClick, onTrendingClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Assuming email is stored in localStorage after user login
  const userEmail = localStorage.getItem('email'); // Retrieve user's email (adjust as per your setup)

  

  return (
    <nav className="bg-cyan-800 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Hamburger Menu */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          {/* Hamburger Icon for small screens */}
          <button 
            className="text-white sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`sm:flex ${isMenuOpen ? 'flex-col space-y-4' : 'hidden'} sm:block sm:flex-row sm:space-y-0 sm:space-x-10`}>
          <Link 
            to="/popular" 
            onClick={onPopularClick} 
            className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
          >
            Popular
          </Link>
          <Link 
            to="/trending" 
            onClick={onTrendingClick} 
            className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
          >
            Trending
          </Link>
          <Link 
            to="/search" 
            className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
          >
            Search
          </Link>
          {/* Profile Link */}
          {userEmail && (
            <Link 
              to={`../api/profile/${userEmail}`} 
              className="text-white text-2xl sm:text-3xl font-semibold hover:text-cyan-300 hover:underline hover:scale-110 transition-transform duration-300"
            >
              Profile
            </Link>
          )}
        </div>

        {/* Logout Button */}
        <div className="hidden sm:block">
          <Logout /> {/* Use the new LogoutButton component */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
