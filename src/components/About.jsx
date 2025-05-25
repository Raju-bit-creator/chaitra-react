import React, { useContext, useEffect, useState } from "react";
import Card from "./card";
import productContext from "../context/ProductContext";
import img from "../assets/img.jpg";
import Articles from "./Articles";
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from "./EditProductModal";

const About = () => {
  const context = useContext(productContext);
  const {
    state: { cart, products },
    dispatch,
    product,
    allProduct,
    editProduct,
    deleteProduct,
  } = context; //destructuring
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleMenu = (id) => {
    console.log("thsi is clicked id", id);
    setMenuVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const openEditModal = (product) => {
    // console.log("edit product", product);
    setSelectedProduct(product);
    setModalVisible(true);
  };
  const closeEditModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const saveEdit = (updateData) => {
    editProduct(updateData, selectedProduct._id);
  };
  const handleDelete = (id) => {
    console.log("deleting product", id);
  };

  useEffect(() => {
    allProduct();
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
                    <div className="icon-title">
                      <h5 className="card-title">{item.title}</h5>
                      <BsThreeDots onClick={() => toggleMenu(item._id)} />
                      {menuVisible[item._id] && (
                        <div className="menu-options">
                          <button
                            className="btn btn-warning mx-2"
                            onClick={() => openEditModal(item)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
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
                {modalVisible && selectedProduct._id === item._id && (
                  <EditProductModal
                    product={selectedProduct}
                    onClose={closeEditModal}
                    onSave={saveEdit}
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default About;
