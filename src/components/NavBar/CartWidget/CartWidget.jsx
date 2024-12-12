import { FaShoppingCart } from 'react-icons/fa';

export default function CartWidget() {
  return (
    <div className="flex">
      <a href="" className="flex items-center space-x-2"> {/* Asegúrate de que el contenido se alinee bien */}
        <FaShoppingCart size={24} />
        <span className='bg-[#ff6347] rounded-full px-2 py-1 text-sm text-link-color ml-2'>0</span>
      </a>
    </div>
  );
}
