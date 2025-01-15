import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CartWidget() {
  return (
    <div className="flex">
      <Link to="" className="flex items-center space-x-2">
        <FaShoppingCart size={24} />
        <span className='bg-[#ff6347] rounded-full px-2 py-1 text-sm text-link-color ml-2'>0</span>
      </Link>
    </div>
  );
}
