import React, { useReducer, useState } from "react";
import ProductContext from "./ProductContext";
import { cartReducer } from "./Reducer";

const ProductState = (props) => {
  // const product = {
  //   title: "apple",
  //   price: 100,
  //   description: "This is an apple from mustang123",
  // };

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
  const [product, setProducts] = useState(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

  const [user, setUser] = useState("");
  const fetchUser = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let User = await response.json();
    console.log("this jsonplace user", User);
    setUser(User);
  };
  return (
    <ProductContext.Provider
      value={{ product, fetchUser, user, state, dispatch }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
