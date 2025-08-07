import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FcShop } from "react-icons/fc";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { changeTheme, theme } = useTheme();
  const { totalAmount } = useContext(GlobalContext);
  return (
    <header className="container bg-base-200 fixed top-0 left-0 w-ful z-50 ">
      <div className="navbar">
        <div className="navbar-start">
          <div className="flex items-center">
            <p className="text-4xl">
              <FcShop />
            </p>
            <h2 className="text-xl">Store</h2>
          </div>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal font-semibold">
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
        <div className="navbar-end flex items-center gap-8">
          <div className="mt-2">
            <NavLink to="/likedProductsPage">
              <p className="text-3xl">
                <FaHeart />
              </p>
            </NavLink>
          </div>
          <div className="indicator mt-2">
            <span className="indicator-item badge badge-secondary">
              {totalAmount}
            </span>
            <NavLink to="/basket">
              <p className="text-3xl">
                <FaShoppingCart />
              </p>
            </NavLink>
          </div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onClick={changeTheme}
              type="checkbox"
              defaultChecked={theme == "dark"}
            />

            {/* sun icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
