// components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/search">Search</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
