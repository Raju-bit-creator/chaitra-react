import React, { useContext, useEffect } from "react";
import productContext from "../context/ProductContext";
import { useParams } from "react-router-dom";
import img from "../assets/img.jpg"; 


const SearchResult = () => {
  const { searchQuery } = useParams();

  const context = useContext(productContext);
  const {
    state: { cart, products },
    dispatch,

    allProduct,
  } = context;

  useEffect(()=>{
    allProduct(searchQuery)
  },[searchQuery])
  return <div className="container">
    <div className="row">
        <h4 className="our-products"> Search products</h4>
       {
        products.length>0?(
            products.map((item) =>(
                <div className="col-md-3" key={item._id}>
                    <div className="card">
                        <img src={item.image?.[0]?`http://localhost:5000/uploads/${item.image[0]}`}:img />
                    </div>
                </div>
            )
        )
       }
    </div>
  </div>;
};

export default SearchResult;
