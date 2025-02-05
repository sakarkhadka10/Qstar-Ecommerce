import React from "react";
import DesktopHero from "../elements/DesktopHero";
import DesktopProduct from "./DesktopProduct";

const DesktopHome = () => {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopHero />
        <hr />
        <DesktopProduct />
      </div>
    </div>
  );
};

export default DesktopHome;
