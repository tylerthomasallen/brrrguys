import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({count}) => {
    return(
        <div className="navbar-container">
            <Link to={'/'}>
                <i className="fas fa-home shopping-cart-container"></i>
            </Link>
            <Link to={'/cart'} className="shopping-cart-container">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">{count}</span>
            </Link>
        </div>
    )
}

export default NavBar;