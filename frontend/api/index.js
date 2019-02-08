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

export const addProductAndReturnCart = async (productId, cartId) => {
  try {
    let newcart = await fetch(`/api/products/${productId}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({cart: {cart_id: cartId}})
    });
    let cartJSON = await newcart.json();
    return cartJSON.cart;
  } catch(error) {
    console.log(error);
  }
}
