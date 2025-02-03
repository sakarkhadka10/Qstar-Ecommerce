import React from "react";
import SearchBar from "../elements/SearchBar";
import MobileProduct from "./MobileProduct";
import MobileNav from "./MobileNav";

const MobileHome = () => {
  return (
    <>
      <MobileNav />
      <div className=" bg-[#f0f1f6] h-screen ">
        <div className="bg-white px-5 py-3 shadow-sm ">
          <SearchBar className="w-full fixed to-0 " />
        </div>
        <div className="px-5 py-4">
          <MobileProduct />
        </div>
      </div>
    </>
  );
};

export default MobileHome;
