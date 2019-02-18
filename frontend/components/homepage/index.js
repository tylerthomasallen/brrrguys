import React from 'react';
import { connect } from 'react-redux';
import { HOME } from '../../shared/constants'
import Item from '../item';

const HomePage = ({products}) => {
  return(
    <div className="parent-container">
      <Item products={products} type={HOME} />
    </div>
  );
}

const mapStateToProps = ({products}) => {
  return {
    products
  };
};

export default connect(
  mapStateToProps
)(HomePage);
