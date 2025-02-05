import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import productContext from "../../context/ProductContext";

const DesktopCartButton = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
  } = context;

  return (
    <div className="relative">
      <Link to="/mobile-cart">
        <button className="p-2">
          <FaShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
            {cart.length}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default DesktopCartButton;
