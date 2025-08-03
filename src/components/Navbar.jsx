import { NavLink } from "react-router-dom";
import { FaShoppingCart} from "react-icons/fa";
import { FcShop } from "react-icons/fc";

import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function Navbar() {
  const { totalAmount } = useContext(GlobalContext);
  return (
    <header className="container bg-base-200 fixed top-0 left-0 w-ful z-50 ">
      <div className="navbar">
        <div className="navbar-start">
          <h2 className="flex items-center">
            <h1 className="text-4xl"><FcShop /></h1>
            <h2 className="text-xl">Store</h2>
          </h2>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">
              {totalAmount}
            </span>
            <NavLink to="/basket" className="btn">
              <p className="text-2xl">
                {" "}
                <FaShoppingCart />
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
