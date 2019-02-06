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
