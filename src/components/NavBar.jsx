import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../api/NavItems";
import DesktopCartButton from "./elements/DesktopCartButton";
import CartButton from "./elements/CartButton";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-8 py-2 text-2xl relative">
        <Link to="/">
          <div className="w-11 flex items-center">
            <img
              src="https://drive.brodox.com/uploads/465/logo.png"
              alt="logo"
            />
            <span className="font-bold text-3xl">Star</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg md:items-center">
          {navItems.map((item) => (
            <Link
              key={item._id}
              to={item.link}
              onClick={() => setNavOpen(!navOpen)}
              className="hover:text-gray-300 transition duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="cursor-pointer">{/* <CartButton /> */}</div>
      </div>
    </>
  );
};

export default NavBar;
