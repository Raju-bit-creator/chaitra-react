import React, { useContext } from "react";
import Card from "./card";
import productContext from "../context/ProductContext";
import img from "../assets/img.jpg";

const About = () => {
  const context = useContext(productContext);
  const { title, price, description } = context; //destructuring
  console.log("fruit name is ", description);

  return (
    <div className="container">
      <div className="row">
        this is about page
        <h4>this is product for contexts {title}</h4>
        <h2>Our product</h2>
        <div className="col-md-4">
          <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p>Price: Rs{price}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default About;
