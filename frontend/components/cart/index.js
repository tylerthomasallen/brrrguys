import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveCart } from '../../actions';
import Product from '../product';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.getTotal = this.getTotal.bind(this);
        this.checkout = this.checkout.bind(this);
    }

    checkout() {
        console.log('Checking out!')
    }

    getTotal() {
        const { products } = this.props.cart;
        if (products.length >= 1) {
            return products.reduce((acc, product) => acc.price + product.price)
        }
    }

    componentDidMount() {
        const { retrieveCart, cart } = this.props;
        if (cart.products.length <= 0) {
            retrieveCart()
        }
    }

    render() {
        const { cart } = this.props;
        const { firstName, lastName, email } = this.props;
        let formType = "Place Order"
        return(
            <div className="cart-parent-container">
                <div className="product-container cart-container">
                    {cart.products.map(product => {
                        return <Product key={product.id} title={product.title} imgUrl={product.photoUrl} price={product.price} isCart={true} />
                    })}
                </div>

                <div className="total-container">
                    <span className="title">Items total: ${this.getTotal()}</span>
                    <form onSubmit={this.checkout}>
                        <div>
                            <input type="text" placeholder="First Name" required name="fname" value={firstName}/>
                            <input type="text" placeholder="Last Name" required name="lname" value={lastName}/>
                        </div>
                        <input type="text" placeholder="Email" required name="email" value={email}/>
                        <input type="submit" value="Place Order" />
                    </form>
                </div>
            </div>
        )
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
