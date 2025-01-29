import CartWidget from "./CartWidget";
import logo from "../assets/img/lutto-logo.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-[#212529] text-white flex justify-between items-center font-montserrat p-4">
      <NavLink to="/" className="NavBrand" end>
        <img src={logo} alt="logo-lutto" className="h-[100px] w-[100px]" />
      </NavLink>
      <div>
        <ul className="flex space-x-10">
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? 'p-4 text-[#a56565] bg-[#FFFFFF1A] rounded-[5px]'
                  : 'p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]'
              }
              end
            >
              TODOS LOS PRODUCTOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products/remeras"
              className={({ isActive }) =>
                isActive
                  ? 'p-4 text-[#a56565] bg-[#FFFFFF1A] rounded-[5px]'
                  : 'p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]'
              }
            >
              REMERAS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products/abrigos"
              className={({ isActive }) =>
                isActive
                  ? 'p-4 text-[#a56565] bg-[#FFFFFF1A] rounded-[5px]'
                  : 'p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]'
              }
            >
              ABRIGOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products/pantalones"
              className={({ isActive }) =>
                isActive
                  ? 'p-4 text-[#a56565] bg-[#FFFFFF1A] rounded-[5px]'
                  : 'p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]'
              }
            >
              PANTALONES
            </NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}
