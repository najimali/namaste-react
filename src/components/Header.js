import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import { DEBOUNCE_DELAYS, LOGO } from '../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { debounce } from '../utils/debounce';
import { setText } from '../reducer/searchTextSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
                <Link to="/">
                    <img src={LOGO} alt="Logo" />
                </Link>

            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for restaurant and food"
                    value={searchTerm}
                    onChange={(event) => handleSearchTextChange(event)}
                />
            </div>
            <div className='nav-container'>
                <div className='nav-items'>
                    <Link to="/about" className='link'>About</Link>
                </div>
                <div className='nav-items'>
                    <Link to="/contact" className='link'>Contact Me</Link>
                </div>
                <div className="profile nav-items">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>



        </header>
    );
};

export default Header;
