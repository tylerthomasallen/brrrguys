import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions';
import { Link, withRouter } from 'react-router-dom';

class ProductItem extends Component {

    constructor(props) {
        super(props);
        const { cartId, productId } = this.props;
        this.state = {
            cartId,
            productId,
            size: "S",
            quantity: "1"
        }

        this.submit = this.submit.bind(this);
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    quantity() {
        const maxQuantity = 10;
        const quantity = [];
        for (let i = 1; i <= maxQuantity; i++) {
            quantity.push(i);
        }
        return (
            <select onChange={this.update("quantity")}>
                {quantity.map((amount, idx) => (
                    <option key={idx} value={amount}>{amount}</option>
                ))}
            </select>
        );

    }

    size() {
        const sizes = ['S', 'M', 'L', 'XL'];
        return(
            <select onChange={this.update("size")}>
                {sizes.map((size, idx) => (
                    <option key={idx} value={size}>{size}</option>
                ))}
            </select>
        )
    }

    async submit(e) {
        e.preventDefault();
        this.props.history.push('/');
        const { addToCart } = this.props;
        const product = { ...this.state }
        product.quantity = parseInt(product.quantity)
        await addToCart(product);
    }

    render() {
        const { title, imgUrl, price, addToCart, productId, cartId, isCart, removeFromCart, isShow, quantity, size } = this.props;
        if (isCart) {
            return (
                <div className="cart-item">
                    <div className="product-item">
                        <img className="cart-image" src={imgUrl}></img>
                        <span className="title">{title}</span>
                    </div>
                    <div className="cart-item-price">
                        <span className="price">${price} /ea </span>
                        <span>Qty: {quantity}</span>
                        <span>Size: {size}</span>
                        <i className="fas fa-trash-alt" onClick={() => removeFromCart(productId)}></i>
                    </div>
                </div>
            )} else if (isShow) {
                return (
                <div className="product-item show-item" >
                    <img src={imgUrl}></img>
                    <span className="title">{title}</span>
                    <div className="price-cart-container price-show-container">
                        <span className="price">${price} /ea </span>
                        <form onSubmit={this.submit}>
                            <span>Qty: </span>
                            {this.quantity()}
                            <span>Size: </span>
                            {this.size()}
                            <input type="submit" className="price add" value="Add" />
                        </form>
                    </div>
                </div>
                )
            } else {
            return (
                <Link to={`/beer/${productId}`} className="product-item" >
                    <img src={imgUrl}></img>
                    <span className="title">{title}</span>
                    <div className="price-cart-container">
                        <span className="price">${price} /ea </span>
                        <span className="price add">Add</span>
                    </div>
                </Link>
            )
        }
     }
}

const mapStateToProps = ({cart}) => {
    return {
        cartId: cart.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId))
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductItem));