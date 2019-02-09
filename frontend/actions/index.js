import { getProducts, getCart, addProductAndReturnCart  } from '../api';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_CART = 'RECEIVE_CART';

export const receiveProducts = payload => {
    return {
        type: RECEIVE_PRODUCTS,
        payload
    };
};

export const receiveCart = payload => {
    return {
        type: RECEIVE_CART,
        payload
    };
};

export const retrieveProducts = () => async dispatch => {
    let products = await getProducts()
    return(
        dispatch(receiveProducts(products))
    );
};

export const retrieveCart = () => async dispatch => {
    let cart = await getCart();
    return (
        dispatch(receiveCart(cart))
    );
};

export const addToCart = (productId, cartId) => async dispatch => {
    let cart = await addProductAndReturnCart(productId, cartId);
    return(
        dispatch(receiveCart(cart))
    )
}
