import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ title, img, description, price, stock, id }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { addItem } = useContext(CartContext);

  const onSubmitCount = (count) => {
    addItem({ id, price, title, img, stock }, count);
    setIsAddedToCart(true);
  };

  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center uppercase">{title}</h3>
      <img className="mx-auto mb-4" src={img} alt={title} />
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <p className="text-lg font-semibold text-green-600 mb-2 text-center">${price}</p>
      <div className="flex justify-center space-x-4">
        {isAddedToCart ? (
          <>
            <Link
              to="/cart"
              className="bg-blue-600 text-white font-bold py-1 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              Ver carrito
            </Link>
            <Link
              to="/"
              className="bg-gray-700 text-white font-bold py-1 px-4 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200"
            >
              Seguir comprando
            </Link>
          </>
        ) : (
          <ItemCount stock={stock} onSubmitCount={onSubmitCount} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
