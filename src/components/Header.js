import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import { DEBOUNCE_DELAYS } from '../utils/constant';
import logoPath from "../assets/LocalBitesLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faArrowDown, faCartShopping, faContactBook, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { debounce } from '../utils/debounce';
import { setText } from '../reducer/searchTextSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCart } from '../reducer/cartSlice';
import { toggleLocation } from '../reducer/locationSlice';

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
    const handleToggleCart = () => {
        dispatch(toggleCart())
    }
    const cartItems = useSelector(store => store.cart.items)
    const address = useSelector(store => store.location.address)
    return (
        <header className="header">
            <div className="logo">
                    <Link to="/">
                        <img src={logoPath} alt="Logo" />
                    </Link>
                <div className='location' onClick={() => dispatch(toggleLocation())}>
                    <span>{address?.formatted_address}</span>
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
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
                <div className='nav-items' onClick={handleToggleCart}>
                    <FontAwesomeIcon className='cart-icon-container' icon={faCartShopping} />
                    <span className="cart-count">{cartItems?.length || 0}</span>
                </div>
                <div className='nav-items'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </header>
    );
};

export default Header;
