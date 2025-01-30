import React, { createContext, useState } from "react";

// Creación del contexto
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]); // Estado para la lista de productos en el carrito

  // Función para agregar productos al carrito
  const addItem = (product, count) => {
    setCartList((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        const newCount = existingProduct.count + count;

        // Restricciones: el mínimo es 1 y el máximo es el stock disponible
        if (newCount >= 1 && newCount <= product.stock) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, count: newCount } : item
          );
        }
      } else {
        // Agregar nuevo producto al carrito si no existe
        if (count >= 1 && count <= product.stock) {
          return [...prevCart, { ...product, count }];
        }
      }

      return prevCart; // No modificar si no se cumple la restricción
    });
  };

  // Función para eliminar un producto del carrito
  const removeItem = (id) => {
    setCartList((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartList([]);
  };

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cartList.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clearCart,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
