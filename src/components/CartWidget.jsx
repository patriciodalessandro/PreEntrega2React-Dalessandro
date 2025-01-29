import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

export default function CartWidget() {
  const { cartList } = useContext(CartContext);

  const totalItems = cartList.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="flex items-center space-x-2">
      <Link to="/cart" className="flex items-center space-x-2">
        <FaShoppingCart size={24} />
        <span className="bg-[#ff6347] rounded-full px-2 py-1 text-sm text-white">
          {totalItems > 0 ? totalItems : 0}
        </span>
      </Link>
    </div>
  );
}
