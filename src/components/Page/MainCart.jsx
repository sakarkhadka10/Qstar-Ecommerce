import React from "react";
import DesktopCart from "../Desktop/DesktopCart";
import MobileCart from "../Mobile/MobileCart";

const MainCart = () => {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopCart />
      </div>
      <div className="md:hidden">
        <MobileCart />
      </div>
    </div>
  );
};

export default MainCart;
