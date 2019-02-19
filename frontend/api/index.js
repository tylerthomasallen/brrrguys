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
  debugger;
  try {
    let cart = await fetch(`/api/carts`);
    let cartJSON = await cart.json();
    debugger;
    return cartJSON.cart;
  } catch(error) {
    console.log(error);
  }
}

export const addProduct = async (product) => {
  try {
    await fetch(`/api/products/${product.id}`, postBody({ product }))
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

export const checkoutCart = async (user, cartId) => {
  debugger;
  try {
    await fetch(`api/carts/${cartId}`, postBody({ user }))
  } catch(error) {
    console.log(error)
  }
}

const postBody = body => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
})