import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveCart } from '../../actions';
import Product from '../product';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        }
        this.getTotal = this.getTotal.bind(this);
        this.checkout = this.checkout.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    checkout() {
        console.log('Checking out!')
    }

    getTotal() {
        const { products } = this.props.cart;
        if (products.length >= 1) {
            return products.reduce((acc, product) => acc + product.price, 0)
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
        const { firstName, lastName, email } = this.state;
        return(
            <div className="cart-parent-container">
                <div className="product-container cart-container">
                    {cart.products.map(product => {
                        return <Product key={product.id} title={product.title} imgUrl={product.photoUrl} price={product.price} isCart={true} productId={product.id} />
                    })}
                </div>

                <div className="total-container">
                    <span className="title">Items total: ${this.getTotal()}</span>
                    <form onSubmit={this.checkout}>
                        <div>
                            <input type="text" placeholder="First Name" required name="fname" value={firstName} onChange={this.update("firstName")}/>
                            <input type="text" placeholder="Last Name" required name="lname" value={lastName} onChange={this.update("lastName")}/>
                        </div>
                        <input type="text" placeholder="Email" required name="email" value={email} onChange={this.update("email")}/>
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
