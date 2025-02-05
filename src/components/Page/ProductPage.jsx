import React from "react";
import DesktopProduct from "../Desktop/DesktopProduct";
import MobileProduct from "../Mobile/MobileProduct";

const ProductPage = () => {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopProduct />
      </div>
      <div className="md:hidden">
        <MobileProduct />
      </div>
    </div>
  );
};

export default ProductPage;
