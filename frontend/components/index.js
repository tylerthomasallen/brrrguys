import React, { Component } from 'react';
import { getProducts } from '../api';
import NavBar from './navbar';

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
        {products.map(product => {
          return (
            <div key={product.id} className="product-container"> 
              <span key={product.id}>{product.title}</span>
              <img src={product.photoUrl}></img>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Container;
