import React from 'react';
import { ITEM_TYPES } from '../../shared/constants';

const Item = ({products, type, customProps = {} }) => {
  const ItemName = ITEM_TYPES[type];
  return(
    <div className="product-container">
      {products.map((product, idx) => (
        <ItemName key={`${type}-${idx}`} {...product} {...customProps}/>
      ))}
    </div>
  )
}

export default Item;