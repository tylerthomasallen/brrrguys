import React from 'react';
import { connect } from 'react-redux';
import { SHOW } from '../../shared/constants';

const ProductShow = ({product, cart_id}) => {
  return(
    <div className="product-show-container">
      <Item products={product} type={SHOW} customProps={cart_id} />
    </div>
  )
}

const mapStateToProps = ({ products, cart }, ownProps) => {
    const { productId } = ownProps.match.params;
    const product = products.filter(product => product.id === parseInt(productId))
    return {
      product,
      cart_id: cart.id
  };
};

export default connect(
    mapStateToProps
)(ProductShow);

