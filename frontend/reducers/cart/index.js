import CART_STATE from '../../shared/initial_states/cart'
import { RECEIVE_CART } from '../../actions';

const cartReducer = (state = CART_STATE, action) => {
  switch (action.type) {
    case RECEIVE_CART:
      let total;

      if (action.payload.products.length >= 1) {
        total = action.payload.products.reduce((acc, product) => acc + (product.price * product.quantity), 0).toFixed(2);
      }

      action.payload.total = total;
      
      return action.payload
    default:
      return state;
  }
};

export default cartReducer;