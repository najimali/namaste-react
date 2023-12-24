import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import { DEBOUNCE_DELAYS, LOGO } from '../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faContactBook, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { debounce } from '../utils/debounce';
import { setText } from '../reducer/searchTextSlice';
import { useDispatch, useSelector } from 'react-redux';
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

    const cartItems = useSelector(store => store.cart.items)
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
                    <Link to="/contact" className='link' icon={faContactBook}>
                        <FontAwesomeIcon icon={faPhone} />
                    </Link>
                </div>
                <div className='nav-items'>
                    <Link to="/cart" className='link' icon={faContactBook}>
                        <FontAwesomeIcon className='cart-icon-container' icon={faCartShopping} />
                        <span className="cart-count">{cartItems.length}</span>
                    </Link>
                </div>
                <div className='nav-items'>
                    <Link to="/about" className='link'>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
