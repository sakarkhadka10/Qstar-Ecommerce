import React from "react";
import MobileHome from "../Mobile/MobileHome";
import DesktopHome from "../Desktop/DesktopHome";

const HomePage = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopHome />
      </div>
      <div className="md:hidden">
        <MobileHome />
      </div>
    </>
  );
};

export default HomePage;
