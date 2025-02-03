import { FaHouse, FaBarsStaggered, FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import CartButton from "../components/elements/CartButton";

export const navItems = [
  { _id: 1, name: "Home", link: "/" },
  { _id: 2, name: "Catogries", link: "/about" },
  { _id: 3, name: "Carts", link: "/desktop-cart" },
  { _id: 4, name: "Account", link: "/desktop-account" },
];

export const mobileNavItems = [
  { _id: 1, icon: FaHouse, name: "Home", link: "/" },
  { _id: 2, icon: FaBarsStaggered, name: "Catogries", link: "/about" },
  { _id: 3, icon: CartButton, name: "Carts", link: "/mobile-cart" },
  { _id: 4, icon: FaUser, name: "Account", link: "/mobile-account" },
];
