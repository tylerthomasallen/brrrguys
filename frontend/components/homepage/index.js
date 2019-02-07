import React, { Component } from 'react';
import { getProducts, getCart, addProductAndReturnCart } from '../../api';
import NavBar from '../navbar';
import Product from '../product';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: {},
      loading: true
    }

    this.addToCart = this.addToCart.bind(this);
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

  async addToCart(id) {
    let { cart } = this.state;
    let product = {id, cart_id: cart.id};
    debugger;
    cart = await addProductAndReturnCart(product);
    await this.setState({cart});
  }

  render() {
    const { products } = this.state;
    return(
      <div className="parent-container">
        <NavBar count={products.length}/>
       
        <div className="product-container"> 
          {products.map(product => {
            return <Product key={product.id} title={product.title} imgUrl={product.photoUrl} price={product.price} addToCart={this.addToCart} productId={product.id}/>
          })}
        </div>
      </div>
    );
  }
}

export default HomePage;
