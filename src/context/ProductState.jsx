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
      instock: 7,
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
  // const [articles, setArticels] = useState([]);

  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a"
  //     );
  //     const data = await response.json();
  //     setArticels(data.articles);
  //     console.log("data from news api", data.articles);
  //   } catch (error) {
  //     console.log("fetching error", error);
  //   }
  // };
  const allProduct = async () => {
    try {
      const resposne = await fetch("https://fakestoreapi.com/products", {
        method: "GET", //read
        headers: {
          "Content-Type": "application/json",
          "auth-token": "mytoken",
        },
      });
      const data = await resposne.json();
      setProducts(data);
      console.log("data from fake store api", data);
    } catch (error) {
      res.status(500).send("internal server error");
    }
  };

  return (
    <ProductContext.Provider value={{ product, allProduct, state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
