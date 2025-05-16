import React, { useContext } from "react";
import productContext from "../context/ProductContext";
import Img from "../assets/img.jpg";
import { MdDelete } from "react-icons/md";

const CartItems = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
  } = context;
  //   console.log("this is cart item cart", cart);

  return (
    <div className="container">
      <h4>this is cart items</h4>

      <div className="product-container">
        <ul>
          {cart &&
            cart.map((item) => {
              return (
                <li key={item._id}>
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src={Img}
                        style={{
                          height: "80px",
                          width: "80px",
                          marginBottom: "10px",
                        }}
                        alt="cart image"
                      />
                    </div>
                    <div className="col-md-2">
                      <h5>{item.title}</h5>
                    </div>
                    <div className="col-md-2">
                      <h5>price: Rs {item.price}</h5>
                    </div>
                    <div className="col-md-2">
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "UPDATE_CART_ITEM",
                            payload: { _id: item._id, qty: e.target.value },
                          })
                        }
                        className="form-control"
                      >
                        {[...Array(item.instock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-2">
                      <button
                        className="btn btn-light"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          })
                        }
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default CartItems;
