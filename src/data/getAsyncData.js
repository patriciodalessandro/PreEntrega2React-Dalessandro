import products from "./data.json";

// Función para obtener todos los productos
export const getAsyncData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products && products.length > 0) {
        resolve(products);
      } else {
        reject(new Error("No products available."));
      }
    }, 2000);
  });
};

//función para obtener el producto con el ID solicitado

export const getAsyncItemById = (itemID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestedProduct = products.find((item) => item.id === Number(itemID));
      if (requestedProduct) {
        resolve(requestedProduct);
      } else {
        reject(new Error(`Product with ID ${itemID} not found`));
      }
    }, 500);
  });
};
