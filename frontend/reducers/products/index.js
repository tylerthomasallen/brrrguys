import { RECEIVE_PRODUCTS } from '../../actions';

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default productsReducer;