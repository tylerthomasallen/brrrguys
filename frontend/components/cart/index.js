import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckedOut from './checked_out';
import { retrieveCart } from '../../actions';
import { checkout } from '../../api';
import Item from '../item';
import { CART } from '../../shared/constants';

class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      checkedOut: false
    }

    this.checkout = this.checkout.bind(this);
    this.cartItems = this.cartItems.bind(this);
  }

  update(field) {
    return ({ currentTarget: { value } }) => this.setState({[field]: value});
  }

  async checkout() {
    const { cart, retrieveCart } = this.props;
    const { firstName, lastName, email } = this.state;
    if (cart.products.length >= 1) {
      const user = { firstName, lastName, email };
      await checkout(user, cart.id);
      await retrieveCart();
      await this.setState({ checkedOut: true })
    }
  }

  cartItems() {
    const { cart: { products } } = this.props;
    return(
      <div className="product-container cart-container">
        <Item products={products} type={CART}/>
      </div>
    )
  }

  render() {
    const { firstName, lastName, email, checkedOut } = this.state;
    const { cart: { total } } = this.props;
    if (checkedOut) {
      return <CheckedOut />
    } else {
      return (
        <div className="cart-parent-container">
          {this.cartItems()}

          <div className="total-container">
            <span className="title">Items total: ${total}</span>
            <form onSubmit={this.checkout}>
              <div>
                <input type="text" placeholder="First Name" required name="fname" value={firstName} onChange={this.update("firstName")} />
                <input type="text" placeholder="Last Name" required name="lname" value={lastName} onChange={this.update("lastName")} />
              </div>

              <input type="text" placeholder="Email" required name="email" value={email} onChange={this.update("email")} />
              <input type="submit" value="Place Order" />

            </form>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveCart: () => dispatch(retrieveCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
