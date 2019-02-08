export const getProducts = async () => {
  try {
    let products = await fetch(`/api/products`);
    let productsJSON = await products.json();
    debugger;
    return productsJSON.products;
  } catch(error) {
    console.log(error);
  }
}

export const getCart = async () => {
  try {
    let cart = await fetch(`/api/carts`);
    debugger;
    let cartJSON = await cart.json();
    debugger;
    return cartJSON.cart;
  } catch(error) {
    console.log(error);
  }
}

export const addProductAndReturnCart = async (product) => {
  let cart = {cart_id: product.cart_id};
  debugger;
  try {
    let newcart = await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cart)
    });
    debugger;
    let cartJSON = await newcart.json();
    debugger;
    return cartJSON.cart;
  } catch(error) {
    console.log(error);
  }
}
