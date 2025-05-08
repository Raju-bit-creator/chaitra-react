import React, { useContext } from "react";
import Card from "./card";
import productContext from "../context/ProductContext";

const About = () => {
  const context = useContext(productContext);
  const { product } = context;
  console.log("fruit name is ", product);

  return (
    <div>
      this is about page
      <h4>this not phone this fruit and name is {product}</h4>
      <Card />
    </div>
  );
};

export default About;
