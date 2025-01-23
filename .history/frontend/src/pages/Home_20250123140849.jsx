// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import Button from 'react-bootstrap/Button';
// // // import "../Styles/Home.css";

// // const Home = () => {
// //     return (
// //         <div className='Home'>
// //             <div className='header'>
// //                 <h1 className='logo'>MovieVerse</h1>
// //                 <p className='description'>Welcome to MovieVerse! Sign in or sign up to explore our movie universe.
// //                     Discover your next favorite film in an expansive universe of movie content. MovieVerse brings you the latest releases and timeless classics all in one place.
// //                 </p>
// //             </div>
// //             <div className='buttons'>
// //                 <Link to="/login" className='link'>
// //                     <Button variant="outline-info" id='btn1'>Sign In</Button>
// //                 </Link>
// //                 <Link to="/register" className='link'>
// //                     <Button variant="outline-info" id='btn1'>Sign Up</Button>
// //                 </Link>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Home;

// //css
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white p-6">
//             {/* Header Section */}
//             <div className="text-center mb-8">
//                 <h1 className="text-5xl font-extrabold mb-4 text-cyan-400">MovieVerse</h1>
//                 <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
//                     Welcome to MovieVerse! Sign in or sign up to explore our movie universe.
//                     Discover your next favorite film in an expansive universe of movie content. MovieVerse brings you the latest releases and timeless classics all in one place.
//                 </p>
//             </div>

//             {/* Buttons Section */}
//             <div className="flex flex-col sm:flex-row gap-4">
//                 <Link to="/login">
//                     <button className="px-6 py-3 text-lg font-medium text-cyan-400 border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-gray-900 transition duration-300">
//                         Sign In
//                     </button>
//                 </Link>
//                 <Link to="/register">
//                     <button className="px-6 py-3 text-lg font-medium text-cyan-400 border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-gray-900 transition duration-300">
//                         Sign Up
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; // You can still use this if needed

const Home = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 text-white">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://your-image-url-here.com')" }}></div>
            
            <div className="relative container mx-auto px-4 py-20 flex flex-col justify-center items-center h-full">
                <h1 className="text-5xl font-bold text-center mb-4 text-white">MovieVerse</h1>
                <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
                    Welcome to MovieVerse! Sign in or sign up to explore our movie universe.
                    Discover your next favorite film in an expansive universe of movie content. 
                    MovieVerse brings you the latest releases and timeless classics all in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/login" className="w-full sm:w-auto">
                        <Button variant="outline-info" className="px-8 py-3 text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-md transition duration-300">Sign In</Button>
                    </Link>
                    <Link to="/register" className="w-full sm:w-auto">
                        <Button variant="outline-info" className="px-8 py-3 text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-md transition duration-300">Sign Up</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
