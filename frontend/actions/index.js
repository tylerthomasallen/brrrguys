import { getProducts, getCart, removeProduct, getProduct} from '../api';

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
  const products = await getProducts()
  return(
    dispatch(receiveProducts(products))
  );
};

export const retrieveCart = () => async dispatch => {
  const cart = await getCart();
  return (
    dispatch(receiveCart(cart))
  );
};

export const loadApp = () => async dispatch => {
  await dispatch(retrieveProducts());
  await dispatch(retrieveCart())
};

