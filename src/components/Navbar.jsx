import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="container bg-base-200">
      <div className="navbar">
        <div className="navbar-start">
          <h2 className="text-2xl">Product</h2>
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
        </div>
      </div>
    </header>
  );
}

export default Navbar;
