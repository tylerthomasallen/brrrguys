import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';

class Product extends Component {
    render() {
        const { title, imgUrl, price, addToCart, productId, cartId, isCart } = this.props;
        if (isCart) {
            return (
                <div className="cart-item">
                    <div className="product-item">
                        <img className="cart-image" src={imgUrl}></img>
                        <span className="title">{title}</span>
                    </div>
                    <span className="price">${price} /ea </span>
                </div>
            )} else {
            return (
                <div className="product-item">
                    <img src={imgUrl}></img>
                    <span className="title">{title}</span>
                    <div className="price-cart-container">
                        <span className="price">${price} /ea </span>
                        <span className="price add" onClick={() => addToCart(productId, cartId)}>Add</span>
                    </div>
                </div>
            )
        }
     }
}

const mapStateToProps = ({cart}) => {
    return {
        cartId: cart.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (productId, cartId) => dispatch(addToCart(productId, cartId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);