import React, { Component } from 'react';
import { retrieveProducts } from '../../actions'
import Product from '../product';
import { connect } from 'react-redux';

class HomePage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: [],
  //     loading: true
  //   }

  //   this.addToCart = this.addToCart.bind(this);
  // }

  async componentDidMount() {
    const { products, retrieveProducts } = this.props;
    if (products.length <= 0) {
      debugger;
      await retrieveProducts()
    }
  }

  render() {
    const { products } = this.props;
    return(
      <div className="parent-container">
        <div className="product-container"> 
          {products.map(product => {
            return <Product key={product.id} title={product.title} imgUrl={product.photoUrl} price={product.price} productId={product.id}/>
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({products}) => {
  return {
    products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveProducts: () => dispatch(retrieveProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
