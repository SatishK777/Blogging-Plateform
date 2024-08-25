import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/style/header.css'; 
// import Banner from '../components/Banner'
import HomeBanner from './HomeBanner';


const Header = () => {
    return (
        <>
        
        <header className="header">
            <div className="logo">
                <h1>SK Blog Bytes</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/logout">Log Out</Link></li>
                </ul>
            </nav>
        </header>
        <HomeBanner />
        </>
    );
};

export default Header;
