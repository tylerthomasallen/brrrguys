import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveCart } from '../../actions';
import { removeProduct } from '../../api';

class CartItem extends Component {

  constructor(props) {
    super(props);

    this.removeFromCart = this.removeFromCart.bind(this);
  }
  
  async removeFromCart() {
    const { id, retrieveCart } = this.props;
    await removeProduct(id);
    await retrieveCart();
  }

  render() {
    const { photoUrl, title, price, quantity, size } = this.props;
    return(
      <div className="cart-item">
        
        <div className="product-item">
          <img className="cart-image" src={photoUrl}></img>
          <span className="title">{title}</span>
        </div>
        
        <div className="cart-item-price">
          <span className="price">${price} /ea </span>
          <span>Qty: {quantity}</span>
          <span>Size: {size}</span>
          <i className="fas fa-trash-alt" onClick={this.removeFromCart}></i>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    retrieveCart: () => dispatch(retrieveCart())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartItem)