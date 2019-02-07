import React, { Component } from 'react';

const Product = ({title, imgUrl, price, addToCart, productId}) => {
    return(
        <div className="product-item">
            <img src={imgUrl}></img>
            <span className="title">{title}</span>
            <div className="price-cart-container">
                <span className="price">${price} /ea </span>
                <span className="price add" onClick={() => addToCart(productId)}>Add</span>
            </div>
        </div>

    )
}

export default Product;