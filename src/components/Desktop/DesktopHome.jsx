import React from "react";
import DesktopHero from "../elements/DesktopHero";
import DesktopProduct from "./DesktopProduct";
import DesktopNav from "./DesktopNav";
import DesktopFooter from "./DesktopFooter";

const DesktopHome = () => {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopNav />
        <DesktopHero />
        <hr />
        <DesktopProduct />
        <DesktopFooter />
      </div>
    </div>
  );
};

export default DesktopHome;
