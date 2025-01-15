import CartWidget from "./CartWidget";
import logo from "../assets/img/lutto-logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-[#212529] text-white flex justify-between items-center font-montserrat p-4">
      <Link to="/" className="NavBrand">
        <img src={logo} alt="logo-lutto" className="h-[100px] w-[100px]" />
      </Link>
      <div>
        <ul className="flex space-x-10">
          <li>
            <Link
              to="/products"
              className="p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]"
            >
              TODOS LOS PRODUCTOS
            </Link>
          </li>
          <li>
            <Link
              to="/products/remeras"
              className="p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]"
            >
              REMERAS
            </Link>
          </li>
          <li>
            <Link
              to="/products/abrigos"
              className="p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]"
            >
              ABRIGOS
            </Link>
          </li>
          <li>
            <Link
              to="/products/pantalones"
              className="p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]"
            >
              PANTALONES
            </Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}
