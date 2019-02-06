import React, { Component } from 'react';
import { getProducts } from '../api';

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
      debugger;
      await this.setState({products})
    }
    debugger;
  }

  render() {
    const { products } = this.state;
    return(
      <div className="parent-container">
        {products.map(product => {
          return <span key={product.id}>{product.title}</span>
        })}
      </div>
    );
  }
}

export default Container;
