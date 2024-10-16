import React, { createContext, useState, useEffect, useContext } from "react";

//create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //Product state
  const [products, setProducts] = useState([]);

  //Fetching Products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Fetch error: ", error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
