export const getProducts = async () => {
  try {
    let products = await fetch(`/api/products`);
    let productsJSON = await products.json();
    return productsJSON.products;
  } catch(error) {
    console.log(error);
  }
}

export const getProduct = async (productId) => {
  try {
    let product = await fetch(`/api/products/${productId}`)
    let productJSON = await product.json();
    return productJSON.products
  } catch(error) {
    console.log(error)
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

export const addProductAndReturnCart = async (productInput) => {
  let product = { cart_id: productInput.cartId, size: productInput.size, quantity: productInput.quantity }
  try {
    let cart = await fetch(`/api/products/${productInput.productId}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(product)
    });
    let cartJSON = await cart.json();
    return cartJSON.cart;
  } catch(error) {
    console.log(error);
  }
}

export const checkoutAndReturnCart = async (user, cartId) => {
  try {
    let cart = await fetch(`api/carts/${cartId}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user})
    });
    let cartJSON = await cart.json();
    return cartJSON.cart;
  } catch(error) {
    console.log(error)
  }
}


export const removeProductAndReturnCart = async (productId) => {
  try {
    let cart = await fetch(`/api/products/${productId}/edit`);
    let cartJSON = await cart.json();
    return cartJSON.cart;
  } catch(error) {
    console.log(error)
  }
}