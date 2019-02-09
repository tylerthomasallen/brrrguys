import React, { Component } from 'react';
import { retrieveProducts, retrieveCart } from '../../actions'
import Product from '../product';
import { connect } from 'react-redux';

class HomePage extends Component {

  async componentDidMount() {
    const { products, retrieveProducts, cart, retrieveCart } = this.props;
    if (products.length <= 0) {
      await retrieveProducts()
    }

    if (cart.id === undefined) {
      await retrieveCart();
    }
  }

  render() {
    const { products } = this.props;
    return(
      <div className="parent-container">
        <div className="product-container"> 
          {products.map(product => {
            return <Product key={product.id} title={product.title} imgUrl={product.photoUrl} price={product.price} productId={product.id} isCart={false}/>
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({products, cart}) => {
  return {
    products,
    cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveProducts: () => dispatch(retrieveProducts()),
    retrieveCart: () => dispatch(retrieveCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
