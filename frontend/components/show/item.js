import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SMALL, SIZES, QUANTITIES } from '../../shared/constants';
import { retrieveCart } from '../../actions';
import { addProduct } from '../../api';

class ShowItem extends Component {
  
  constructor(props) {
    super(props)
    const { cart_id, id } = this.props;
    
    this.state = {
      cart_id,
      id,
      size: SMALL,
      quantity: QUANTITIES[0]
    }

    this.submit = this.submit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  quantity() {
    return (
      <select onChange={this.update("quantity")}>
        {QUANTITIES.map((amount, idx) => (
          <option key={`quantity-${idx}`} value={amount}>{amount}</option>
        ))}
      </select>
    );
  }

  size() {
    return(
      <select onChange={this.update("size")}>
        {SIZES.map((size, idx) => (
          <option key={`size-${idx}`} value={size}>{size}</option>
        ))}
      </select>
    )
  }

  async submit(e) {
    e.preventDefault();

    const { retrieveCart, history } = this.props;
    const product = { ...this.state }

    history.push('/');
    product.quantity = parseInt(product.quantity)
    
    await addProduct(product)
    await retrieveCart()
  }

  render() {
    const { photoUrl, title, price } = this.props;
    return(
      <div className="product-item show-item" >
        <img src={photoUrl}></img>
        <span className="title">{title}</span>
        <div className="price-cart-container price-show-container">
          <span className="price">${price} /ea </span>
          <form onSubmit={this.submit}>
            <span>Qty: </span>
            {this.quantity()}
            <span>Size: </span>
            {this.size()}
            <input type="submit" className="price add" value="Add" />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({cart}) => {
  return {
    cart_id: cart.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveCart: () => dispatch(retrieveCart())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowItem));