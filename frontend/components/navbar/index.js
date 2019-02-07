import React, { Component } from 'react';

const NavBar = ({cart}) => {
    return(
        <div className="navbar-container">
            <i className="fas fa-home shopping-cart-container"></i>
            <div className="shopping-cart-container">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">{cart.count}</span>
            </div>
        </div>
    )
}

export default NavBar;