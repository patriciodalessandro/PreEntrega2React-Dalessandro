import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { createBuyOrder } from "../data/database";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cartList, removeItem, clearCart, addItem, calculateTotal } = useContext(CartContext);

  async function handleCheckout() {
    // Verifica que el carrito no esté vacío
    if (cartList.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    const orderData = {
      buyer: {
        name: "Patricio",
        email: "patriciodalessandro@gmail.com",
      },
      items: cartList,
      total: calculateTotal(),
      date: new Date(),
    };

    try {
      const newOrderID = await createBuyOrder(orderData);
      alert(`Compra realizada exitosamente. ID de tu orden: ${newOrderID}`);
      clearCart(); // Vacía el carrito después de la compra
    } catch (error) {
      console.error("Error al realizar la compra:", error);
      alert("Ocurrió un error al procesar tu compra. Intenta nuevamente.");
    }
  }

  if (cartList.length === 0) {
    return (
      <div className="text-center p-4">
        <h2 className="text-xl font-semibold">El carrito está vacío :(</h2>
        <Link
          to="/"
          className="mt-4 inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">Carrito de compras</h2>
      <div className="space-y-6">
        {cartList.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.count} x ${item.price}
                </p>
                <p className="text-md font-semibold text-gray-800">
                  Total: ${item.count * item.price}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => addItem(item, -1)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                -
              </button>
              <button onClick={() => addItem(item, 1)} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                +
              </button>
              <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button onClick={clearCart} className="bg-gray-700 text-white px-6 py-3 rounded-lg">
          Vaciar carrito
        </button>
        <div className="text-lg font-semibold">Total: ${calculateTotal()}</div>
        <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg">
          Seguir comprando
        </Link>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
