import { RECEIVE_CART } from '../../actions';

const cartReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case RECEIVE_CART:
            return action.payload
        default:
            return state;
    }
};

export default cartReducer;