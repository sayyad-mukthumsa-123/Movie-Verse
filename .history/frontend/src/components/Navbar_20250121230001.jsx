// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import '../Styles/Navbar.css';

// const Navbar = ({ onPopularClick, onTrendingClick }) => {
//   const navigate = useNavigate(); 
  
//   const handleLogout = () => {
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-links">
//         <Link to="/popular" onClick={onPopularClick} className='nav-link'>Popular Movies</Link>
//         <Link to="/trending" onClick={onTrendingClick} className='nav-link'>Trending Movies</Link>
//         <Link to="/search" className='nav-link'>Search</Link> 
//       </div>
//       <div className="logout">
//         <button onClick={handleLogout} className="logout-button">Logout</button> 
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// //for logout
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import '../Styles/Navbar.css';

// const Navbar = ({ onPopularClick, onTrendingClick }) => {
//   const navigate = useNavigate(); 
  
//   // Logout function to remove token and navigate to the login page
//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove the token from localStorage
//     navigate('/login'); // Redirect to login page after logout
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-links">
//         <Link to="/popular" onClick={onPopularClick} className='nav-link'>Popular Movies</Link>
//         <Link to="/trending" onClick={onTrendingClick} className='nav-link'>Trending Movies</Link>
//         <Link to="/search" className='nav-link'>Search</Link> 
//       </div>
//       <div className="logout">
//         <button onClick={handleLogout} className="logout-button">Logout</button> 
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


//profile-get
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/home_login" className='nav-link'>Home</Link>
        <Link to="/profile" className='nav-link'>Profile</Link>
      </div>
      <div className="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
