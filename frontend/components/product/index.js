import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions';

class Product extends Component {
    render() {
        const { title, imgUrl, price, addToCart, productId, cartId, isCart, removeFromCart } = this.props;
        if (isCart) {
            return (
                <div className="cart-item">
                    <div className="product-item">
                        <img className="cart-image" src={imgUrl}></img>
                        <span className="title">{title}</span>
                    </div>
                    <div className="cart-item-price">
                        <span className="price">${price} /ea </span>
                        <i className="fas fa-trash-alt" onClick={() => removeFromCart(productId)}></i>
                    </div>
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
        addToCart: (productId, cartId) => dispatch(addToCart(productId, cartId)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);