import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navItems } from "../api/NavItems";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-8 py-2 text-2xl relative">
        <div className="w-11 flex items-center">
          <img src="https://drive.brodox.com/uploads/465/logo.png" alt="logo" />
          <span className="font-bold text-3xl">Star</span>
        </div>

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
      </div>
    </>
  );
};

export default NavBar;
