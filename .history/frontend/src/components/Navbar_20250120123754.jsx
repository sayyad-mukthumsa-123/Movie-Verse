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



//handle logout
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../Styles/Navbar.css';

const Navbar = ({ onPopularClick, onTrendingClick }) => {
  const navigate = useNavigate(); 
  
  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('authToken'); // or sessionStorage.removeItem('authToken')
    localStorage.removeItem('userInfo');   // Optionally clear other session-related data
    
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/popular" onClick={onPopularClick} className='nav-link'>Popular Movies</Link>
        <Link to="/trending" onClick={onTrendingClick} className='nav-link'>Trending Movies</Link>
        <Link to="/search" className='nav-link'>Search</Link> 
      </div>
      <div className="logout">
        <button onClick={handleLogout} className="logout-button">Logout</button> 
      </div>
    </nav>
  );
};

export default Navbar;
