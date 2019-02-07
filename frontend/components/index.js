import React, { Component } from 'react';
import { getProducts, getCart } from '../api';
import NavBar from './navbar';
import Product from './product';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: {},
      loading: true
    }
  }

  async componentDidMount() {
    let { products, cart } = this.state;

    if (products.length <= 0) {
      products = await getProducts();
      await this.setState({products})
    }

    if (cart.count === undefined) {
      cart = await getCart();
      await this.setState({cart})
    }

    await this.setState({loading: false})
  }

  render() {
    const { products, cart } = this.state;
    return(
      <div className="parent-container">
        <NavBar cart={cart}/>
       
        <div className="product-container"> 
          {products.map(product => {
            return <Product key={product.id} title={product.title} imgUrl={product.photoUrl} price={product.price} onClick={this.openModal}/>
          })}
        </div>
      </div>
    );
  }
}

export default Container;
