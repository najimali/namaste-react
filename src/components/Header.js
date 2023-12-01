// Header.js
import React from 'react';
import '../styles/header.css'; // Importing the CSS file for styling
import { LOGO } from '../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={LOGO} alt="Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search for restaurant and food" />
                <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="profile">
                <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
    );
};

export default Header;
