import React from 'react';
import { Link } from 'react-router-dom';

const HomeItem = ({id, photoUrl, title, price}) => {
  return (
    <Link to={`/beer/${id}`} className="product-item" >
      <img src={photoUrl} />
      <span className="title">{title}</span>
      <div className="price-cart-container">
        <span className="price">${price} /ea </span>
        <span className="price add">Add</span>
      </div>
    </Link>
  )
}

export default HomeItem;