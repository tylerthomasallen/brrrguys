import { OK } from '../shared/constants'

export const getProducts = async () => {
  try {
    let products = await fetch(`/api/products`);
    let productsJSON = await products.json();
    return productsJSON.products;
  } catch(error) {
    console.log(error);
  }
}

export const getCart = async () => {
  try {
    let cart = await fetch(`/api/carts`);
    let cartJSON = await cart.json();
    return cartJSON.cart;
  } catch(error) {
    console.log(error);
  }
}

export const addProduct = async (product) => {
  try {
    const res = await fetch(`/api/products/${product.id}`, postBody({ product }))
    return res.status === OK
  } catch(error) {
    console.log(error);
  }
}

export const removeProduct = async (productId) => {
  try {
    await fetch(`/api/products/${productId}/edit`);
  } catch (error) {
    console.log(error)
  }
}

export const checkout = async (user, cartId) => {
  try {
    const res = await fetch(`api/carts/${cartId}`, postBody({ user }))
    return res.status === OK
  } catch(error) {
    console.log(error)
  }
}

const postBody = body => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
})