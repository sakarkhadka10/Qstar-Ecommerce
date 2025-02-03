import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import productContext from "../../context/ProductContext";

const MobileCart = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
  } = context;
  return (
    <div>
      <div className="bg-white px-5 py-3 shadow-sm ">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <FaArrowLeft />
            <h1>My Cart</h1>
          </Link>
        </div>
      </div>

      <div className="mt-4">
        {cart.length < 0 ? (
          <h1>Sorry No Items Available</h1>
        ) : (
          <div>
            {cart.map((item) => {
              return (
                <div key={item._id}>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileCart;
