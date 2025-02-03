import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Page/HomePage";
import MobileHome from "../components/Mobile/MobileHome";
import MobileCart from "../components/Mobile/MobileCart";
import MobileAccount from "../components/Mobile/MobileAccount";
import DesktopHome from "../components/Desktop/DesktopHome";
import DesktopCart from "../components/Desktop/DesktopCart";
import DesktopAccount from "../components/Desktop/DesktopAccount";
import ProductState from "../context/ProductState";

const RouterSetup = () => {
  return (
    <ProductState>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Routers For Web Devices */}
        <Route path="/desktop-home" element={<DesktopHome />} />
        <Route path="/desktop-cart" element={<DesktopCart />} />
        <Route path="/desktop-account" element={<DesktopAccount />} />

        {/* Routers For Mobile Devices */}
        <Route path="/mobile-home" element={<MobileHome />} />
        <Route path="/mobile-cart" element={<MobileCart />} />
        <Route path="/mobile-account" element={<MobileAccount />} />
      </Routes>
    </ProductState>
  );
};

export default RouterSetup;
