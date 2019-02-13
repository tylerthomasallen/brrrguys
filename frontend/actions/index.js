import { getProducts, getCart, addProductAndReturnCart, removeProductAndReturnCart, getProduct, checkoutAndReturnCart } from '../api';

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

export const retrieveProduct = (productId) => async dispatch => {
    let product = await getProduct(productId)
    return(
        dispatch(receiveProducts(product))
    )
}

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

export const addToCart = (product) => async dispatch => {
    let cart = await addProductAndReturnCart(product);
    return(
        dispatch(receiveCart(cart))
    )
}

export const removeFromCart = (productId) => async dispatch => {
    let cart = await removeProductAndReturnCart(productId);
    return(
        dispatch(receiveCart(cart))
    )
}

export const checkout = (user, cartId) => async dispatch => {
    let cart = await checkoutAndReturnCart(user, cartId);
    return(
        dispatch(receiveCart(cart))
    )
}

