import React, { useContext } from "react";
import productContext from "../../context/ProductContext";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";

const DesktopProduct = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
    product,
  } = context;

  const notifyAddCart = () => toast.success("Added To Cart");
  const notifyRemoveCart = () => toast.error("Removed From Cart");
  return (
    <>
      <div className="mb-14 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-6 py-5">
        {product.map((item) => {
          return (
            <div key={item._id} className="grid">
              <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm mb-3 dark:bg-white ">
                <img
                  className="p-5 rounded-md w-80 h-64"
                  src={item.image}
                  alt={item.name}
                />

                <div className="px-3 pb-3">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                    {item.name}
                  </h5>

                  <div className="flex items-center mt-2.5 mb-5 gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          size={20}
                          key={index}
                          color={
                            index < parseInt(item.ratings)
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                        />
                      ))}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                      {item.ratings.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      Rs. {item.price}
                    </span>
                    {cart && cart.some((p) => p._id === item._id) ? (
                      <button
                        className="text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer "
                        onClick={() => {
                          notifyRemoveCart(),
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item,
                            });
                        }}
                      >
                        Remove From Cart
                      </button>
                    ) : (
                      <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                        onClick={() => {
                          notifyAddCart(),
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: item,
                            });
                        }}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DesktopProduct;
