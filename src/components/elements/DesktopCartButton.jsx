import React, { useContext } from "react";
import productContext from "../../context/ProductContext";
import { FaShoppingCart } from "react-icons/fa";

const DesktopCartButton = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
  } = context;
  return (
    <div className="flex justify-between items-center gap-1 text-2xl">
      <FaShoppingCart />({cart.length})
    </div>
  );
};

export default DesktopCartButton;
