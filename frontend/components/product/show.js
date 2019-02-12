import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveProduct } from '../../actions';
import ProductItem from './product_item';

class ProductShow extends Component {

    async componentDidMount() {
        const { product, retrieveProduct, productId } = this.props;
        if (product.length <= 0) {
            await retrieveProduct(productId)
        }
    }

    render() {
        const { product } = this.props;
        debugger;
        return(
            <div className="product-show-container">
                {product.map(prod => {
                    return <ProductItem key={prod.id} title={prod.title} imgUrl={prod.photoUrl} price={prod.price} isCart={true} productId={prod.id} />
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ products }, ownProps) => {
    const { productId } = ownProps.match.params;
    const product = products.filter(product => product.id === parseInt(productId))
    debugger
    return {
        product,
        productId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (productId, cartId) => dispatch(addToCart(productId, cartId)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId)),
        retrieveProduct: (productId) => dispatch(retrieveProduct(productId))

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductShow);

