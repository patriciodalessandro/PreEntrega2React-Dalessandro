import React, { useState } from 'react';

function ItemCount({ stock, onSubmitCount }) {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4 border border-gray-300 rounded-lg shadow-md max-w-sm mx-auto">
      <div className="flex items-center space-x-4">
        <button
          className={`bg-gray-300 text-xl font-semibold rounded-full p-2 hover:bg-gray-400 transition duration-200 ${count <= 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleDecrease}
          disabled={count <= 1}
        >
          -
        </button>

        <h4 className="text-xl font-semibold">{count}</h4>

        <button
          className={`bg-gray-300 text-xl font-semibold rounded-full p-2 hover:bg-gray-400 transition duration-200 ${count >= stock ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleIncrease}
          disabled={count >= stock}
        >
          +
        </button>
      </div>

      <div>
        <button
          className={`bg-blue-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-200 ${stock === 0 || count < 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => onSubmitCount(count)}
          disabled={stock === 0 || count < 1}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
