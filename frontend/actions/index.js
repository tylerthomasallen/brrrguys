import { getProducts, getCart, removeProduct, getProduct} from '../api';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_CART = 'RECEIVE_CART';
export const RECEIVE_LOADING = 'RECEIVE_LOADING';

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

export const receiveLoading = payload => {
  return {
    type: RECEIVE_LOADING,
    payload
  }
}

export const isLoading = (bool) => async dispatch => {
  return(
    dispatch(receiveLoading(bool))
  )
}

export const retrieveProducts = () => async dispatch => {
  const products = await getProducts()
  return(
    dispatch(receiveProducts(products))
  );
};

export const retrieveCart = () => async dispatch => {
  debugger;
  const cart = await getCart();
  return (
    dispatch(receiveCart(cart))
  );
};

export const loadApp = () => async dispatch => {
  await dispatch(retrieveProducts());
  await dispatch(retrieveCart())
};

