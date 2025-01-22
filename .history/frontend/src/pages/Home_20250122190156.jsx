import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import "../Styles/Home.css";

const Home = () => {
    return (
        <div className='Home'>
            <div className='header'>
                <h1 className='logo'>MovieVerse</h1>
                <p className='description'>Welcome to MovieVerse! Sign in or sign up to explore our movie universe.
                    Discover your next favorite film in an expansive universe of movie content. MovieVerse brings you the latest releases and timeless classics all in one place.
                </p>
            </div>
            <div className='buttons'>
                <Link to="/login" className='link'>
                    <Button variant="outline-info" id='btn1'>Sign In</Button>
                </Link>
                <Link to="/register" className='link'>
                    <Button variant="outline-info" id='btn1'>Sign Up</Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
