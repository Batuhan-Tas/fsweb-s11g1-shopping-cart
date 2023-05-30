import { createContext, useContext } from "react";
import { data } from "../data";
import { useState } from "react";
import { CartContext } from "./CartContext";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
