import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ cart }) => {
    return {
        count: cart.products.length
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);