import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; 
import { CartContext } from "../context/cartContext";
import { createBuyOrder } from "../data/database";
import CartCheckoutForm from "./CartCheckoutForm";

const CartContainer = () => {
  const { cartList, removeItem, clearCart, calculateTotal } = useContext(CartContext);

  const [isBuying, setIsBuying] = useState(false);
  const [userData, setUserData] = useState({ username: "", lastname: "", email: "", dni: "" });
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (cartList.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    const orderData = {
      buyer: { username: userData.username, lastname: userData.lastname, email: userData.email, dni: userData.dni },
      items: cartList,
      total: calculateTotal(),
      date: new Date(),
    };

    try {
      const newOrderID = await createBuyOrder(orderData);
      setOrderId(newOrderID);
      setShowConfirmationMessage(true);
      setIsCheckoutCompleted(true);
    } catch (error) {
      alert("Ocurrió un error al procesar tu compra. Intenta nuevamente.");
    }
  };

  const handleAnotherPurchase = () => {
    setShowConfirmationMessage(false);
    setIsBuying(false);
    setUserData({ username: "", lastname: "", email: "", dni: "" });
    setIsCheckoutCompleted(false);
    clearCart();
  };

  const handleContinueShopping = () => {
    setIsBuying(false);
  };

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

      {!isCheckoutCompleted ? (
        <>
          <div className="space-y-6">
            {cartList.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.count} x ${item.price}</p>
                    <p className="text-md font-semibold text-gray-800">
                      Total: ${item.count * item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="text-lg font-semibold">Total: ${calculateTotal()}</div>
            <div className="flex space-x-4">
              <Link
                to="/" 
                className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200"
              >
                Seguir comprando
              </Link>

              <button
                onClick={clearCart}
                className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200"
              >
                Vaciar carrito
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsBuying(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Iniciar Compra
            </button>
          </div>

          {isBuying && (
            <div className="mt-6">
              <CartCheckoutForm userData={userData} onInputChange={onInputChange} handleCheckout={handleCheckout} />
            </div>
          )}
        </>
      ) : (
        <div className="mt-8 p-6 bg-green-200 text-green-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Compra realizada con éxito</h3>
          <p>¡Gracias por tu compra, <span className="font-semibold">{userData.username}</span>!</p>
          <p>Tu orden ha sido procesada con éxito. ID de la orden: <span className="font-bold">{orderId}</span></p>
          <div className="mt-4 flex justify-center">
            <Link
              to="/" 
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              onClick={handleAnotherPurchase}
            >
              Realizar otra compra
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
