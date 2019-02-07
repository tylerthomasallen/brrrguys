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
    debugger;
    let cartJSON = await cart.json();
    debugger;
    return cartJSON.cart;
  } catch(error) {
    console.log(error);
  }
}
