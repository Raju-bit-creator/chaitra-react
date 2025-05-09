import React from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const product = {
    title: "apple",
    price: 100,
    description: "This is an apple from mustang",
  };

  const products = [
    {
      _id: 1,
      title: "apple",
      description: "this is good product",
      price: 100,
      instock: 5,
    },
    {
      _id: 2,
      title: "mango",
      description: "this is good product from terai",
      price: 300,
      instock: 5,
    },
    {
      _id: 3,
      title: "Grapes",
      description: "this is good product local farm",
      price: 500,
      instock: 3,
    },
    {
      _id: 4,
      title: "Banana",
      description: "this is good for health",
      price: 50,
      instock: 10,
    },
  ];
  return (
    <ProductContext.Provider value={product}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
