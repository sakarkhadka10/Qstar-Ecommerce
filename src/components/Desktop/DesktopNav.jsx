import { useContext } from "react";
import { FaHeart, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import productContext from "../../context/ProductContext";
import DesktopCartButton from "../elements/DesktopCartButton";

const DesktopNav = () => {
  const context = useContext(productContext);

  const {
    state: { cart },
  } = context;
  return (
    <div className="flex justify-between items-center px-8 py-2 text-2xl relative">
      <Link to="/">
        <div className="w-11 flex items-center">
          <img src="https://drive.brodox.com/uploads/465/logo.png" alt="logo" />
          <span className="font-bold text-3xl">Star</span>
        </div>
      </Link>

      {/* Center Search Bar For Products */}
      <div>
        <form className="w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-10 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Mini Cooler Fan..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-1.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* Right Side Icons And Carts Here */}
      <div className="flex justify-between items-center gap-4 max-w-sm ">
        <div className=" flex justify-between items-center gap-1 text-2xl">
          <FaHeart className="text-red-700" />({0})
        </div>
        <div className="">
          <Link to="/cart">
            <DesktopCartButton />
          </Link>
        </div>
        <div className="bg-[#f8f8ff] hover:bg-[#f1f1f5] rounded-lg p-2  font-medium self-center cursor-pointer">
          Account
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
