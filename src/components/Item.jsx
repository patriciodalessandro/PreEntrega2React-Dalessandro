import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        {product.title}
      </h3>
      <img className="mx-auto mb-4" src={product.img} alt={product.title} />
      <p className="text-lg font-semibold text-green-600 mb-2 text-center">
          ${product.price}
      </p>
      <div className="flex justify-center">
        <Link to={`/item/${product.id}`}className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white transition duration-200 text-center">
          Ver más
        </Link>
      </div>
    </div>
  );
}

export default Item;

