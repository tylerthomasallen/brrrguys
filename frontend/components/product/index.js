import React, { Component } from 'react';

const Product = ({title, imgUrl, price}) => {
    return(
        <div className="product-item">
            <img src={imgUrl}></img>
            <span className="title">{title}</span>
            <div className="price-cart-container">
                <span className="price">${price} /ea </span>
                <span className="price add">Add</span>
            </div>
        </div>

    )
}

export default Product;