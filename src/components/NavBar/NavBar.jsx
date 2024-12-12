import CartWidget from "./CartWidget/CartWidget";
import logo from "../../assets/img/lutto-logo.png";
export default function NavBar() {
  return (
    <nav className="bg-[#212529] text-white flex justify-between items-center font-montserrat p-4">
        <div className="NavBrand">
            <img src={logo} alt="logo-lutto" className="h-[100px] w-[100px]" />
            </div>
        <div>
            <ul className="flex space-x-10">
                <li><a href="" className="p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]">TODOS LOS PRODUCTOS</a></li>
                <li><a href="" className="p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]">REMERAS Y CAMISAS</a></li>
                <li><a href="" className="p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]">ABRIGOS</a></li>
                <li><a href="" className="p-4 hover:text-[#a56565] hover:bg-[#FFFFFF1A] hover:rounded-[5px]">PANTALONES</a></li>
            </ul>
        </div>
        <CartWidget/>
        
    </nav>
  )
}
