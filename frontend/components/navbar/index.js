import React, { Component } from 'react';

const NavBar = (props) => {
    return(
        <div className="navbar-container">
            <i className="fas fa-home shopping-cart-container"></i>
            <div className="shopping-cart-container">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">1</span>
            </div>
        </div>
    )
}

export default NavBar;