import React, { Component } from 'react';
import { getProducts } from '../api';
import NavBar from './navbar';
import Product from './product';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    let { products } = this.state;
    if (products.length <= 0) {
      products = await getProducts();
      await this.setState({products})
    }
  }

  render() {
    const { products } = this.state;
    return(
      <div className="parent-container">
        <NavBar />
        <div className="product-container"> 
          {products.map(product => {
            return <Product key={product.id} title={product.title} imgUrl={product.photoUrl} price={product.price}/>
          })}
        </div>
      </div>
    );
  }
}

export default Container;
