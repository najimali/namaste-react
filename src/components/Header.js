// Header.js
import React, { useEffect, useState } from 'react';
import '../styles/header.css'; // Importing the CSS file for styling
import { DEBOUNCE_DELAYS, LOGO } from '../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { debounce } from '../utils/debounce';
import { setText } from '../reducer/searchTextSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch();
    const handleSearchTextChange = (event) => {
        setSearchTerm(event.target.value)
    }
    const debounceSearchText = debounce(() => {
        dispatch(setText(searchTerm))
    }, DEBOUNCE_DELAYS.SEARCH_INPUT);
    useEffect(() => {
        debounceSearchText();
        return () => debounceSearchText.cancel();
    }, [searchTerm]);
    return (
        <header className="header">
            <div className="logo">
                <img src={LOGO} alt="Logo" />
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for restaurant and food"
                    value={searchTerm}
                    onChange={(event) => handleSearchTextChange(event)}
                />
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
