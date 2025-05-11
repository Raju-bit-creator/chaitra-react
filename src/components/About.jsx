import React, { useContext } from "react";
import Card from "./card";
import productContext from "../context/ProductContext";
import img from "../assets/img.jpg";

const About = () => {
  const context = useContext(productContext);
  const { products } = context; //destructuring
  // console.log("fruit name is ", description);

  return (
    <div className="container">
      <div className="row">
        <h2 className="our-prod">Our product form context</h2>
        {products.map((prod) => {
          return (
            <div className="col-md-3">
              <div key={prod._id} className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text">{prod.description}</p>
                  <p>Price: Rs{prod.price}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <Card />
      </div>
    </div>
  );
};

export default About;
