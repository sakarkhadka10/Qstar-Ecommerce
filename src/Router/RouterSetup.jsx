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
import ProductPage from "../components/Page/ProductPage";
import DesktopNav from "../components/Desktop/DesktopNav";
import MainCart from "../components/Page/MainCart";

const RouterSetup = () => {
  return (
    <ProductState>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<MainCart />} />

        {/* Routers For Web Devices */}
        <Route path="/desktop-home" element={<DesktopHome />} />
        <Route path="/desktop-account" element={<DesktopAccount />} />
        <Route path="/desktop-nav" element={<DesktopNav />} />

        {/* Routers For Mobile Devices */}
        <Route path="/mobile-home" element={<MobileHome />} />
        <Route path="/mobile-account" element={<MobileAccount />} />
      </Routes>
    </ProductState>
  );
};

export default RouterSetup;
