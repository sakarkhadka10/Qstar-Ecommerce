import React, { useReducer, useState } from "react";
import productContext from "./ProductContext";
import { ProductList } from "../api/ProductData";
import { cartReducer } from "./Reducer";

const ProductState = (props) => {
  const [product, setProduct] = useState(ProductList);

  // Setup useReducer For Cart
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });
  return (
    <productContext.Provider value={{ state, dispatch, product }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
