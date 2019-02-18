import React from 'react';
import { COMPONENT_TYPES } from '../../shared/constants';

const Item = ({products, type, customProps = {} }) => {
  const ComponentName = COMPONENT_TYPES[type];
  return(
    <div className="product-container">
      {products.map((product, idx) => (
        <ComponentName key={`${type}-${idx}`} {...product} {...customProps}/>
      ))}
    </div>
  )
}

export default Item;