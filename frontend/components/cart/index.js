import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveCart, checkout } from '../../actions';
import Product from '../product/product_item';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            checkedOut: false
        }
        this.getTotal = this.getTotal.bind(this);
        this.checkout = this.checkout.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    async checkout() {
        const { checkout, cart } = this.props;
        if (cart.products.length >= 1) {
            const user = { ...this.state };
            await checkout(user, cart.id);
            await this.setState({checkedOut: true})
        }
    }

    getTotal() {
        const { products } = this.props.cart;
        if (products.length >= 1) {
            return products.reduce((acc, product) => acc + (product.price * product.quantity), 0).toFixed(2);
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
        const { firstName, lastName, email, checkedOut } = this.state;
        if (checkedOut) {
            return (
                <div className="checkout-container">
                    <h1 className="checkout-message">You're all set! Your order is on the way :). Thanks for choosing Brrr Guys!</h1>
                    <iframe src="https://giphy.com/embed/4QFAH0qZ0LQnIwVYKT" width="480" height="345" frameBorder="0" className="giphy" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbc-schitts-creek-4QFAH0qZ0LQnIwVYKT"></a></p>
                </div>
            )
        } else {
            return (
                <div className="cart-parent-container">
                    <div className="product-container cart-container">
                        {cart.products.map(product => {
                            return <Product key={product.id}
                                title={product.title}
                                imgUrl={product.photoUrl}
                                price={product.price}
                                isCart={true}
                                productId={product.id}
                                size={product.size}
                                quantity={product.quantity}
                            />
                        })}
                    </div>

                    <div className="total-container">
                        <span className="title">Items total: ${this.getTotal()}</span>
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
        retrieveCart: () => dispatch(retrieveCart()),
        checkout: (user, cartId) => dispatch(checkout(user, cartId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
