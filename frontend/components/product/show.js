import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveProduct, retrieveCart } from '../../actions';
import ProductItem from './product_item';

class ProductShow extends Component {

    async componentDidMount() {
        const { product, retrieveProduct, productId, cartId, retrieveCart } = this.props;
        if (product.length <= 0) {
            await retrieveProduct(productId)
        }

        if (cartId === undefined) {
            await retrieveCart();
        }
    }

    render() {
        const { product, cartId } = this.props;
        return(
            <div className="product-show-container">
                {product.map(prod => {
                    return <ProductItem key={prod.id} title={prod.title} imgUrl={prod.photoUrl} price={prod.price} productId={prod.id} isShow={true} cartId={cartId}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ products, cart }, ownProps) => {
    const { productId } = ownProps.match.params;
    const product = products.filter(product => product.id === parseInt(productId))
    return {
        product,
        productId,
        cartId: cart.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (productId, cartId) => dispatch(addToCart(productId, cartId)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId)),
        retrieveProduct: (productId) => dispatch(retrieveProduct(productId)),
        retrieveCart: () => dispatch(retrieveCart())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductShow);

