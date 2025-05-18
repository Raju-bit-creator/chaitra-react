import React, { useContext, useEffect } from "react";
import Card from "./card";
import productContext from "../context/ProductContext";
import img from "../assets/img.jpg";
import Articles from "./Articles";

const About = () => {
  const context = useContext(productContext);
  const {
    state: { cart, products },
    dispatch,
    product,
    articles,
    fetchData,
  } = context; //destructuring
  // console.log("our porduct from reducer state ", products);
  console.log("our cart from reducer state ", cart);
  console.log("articles ", articles);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2 className="our-prod">Our product form context</h2>
        <h2 className="our-prod">Our user form context </h2>
        {product &&
          products.map((item) => {
            return (
              <div key={item._id} className="col-md-3">
                <div className="card">
                  <img src={img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p>Price: Rs{item.price}</p>
                    {cart && cart.some((p) => p._id === item._id) ? (
                      <button
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          });
                        }}
                        className="btn btn-danger mx-2"
                      >
                        Remove form cart
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: item,
                          });
                        }}
                        className="btn btn-primary mx-2"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        <Card />
        {/* <Articles articles={articles} /> */}
      </div>
    </div>
  );
};

export default About;
