import React from "react";
import image from "../assets/img.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={image} alt="form image" />
        </div>
        <div className="col-md-6">
          <h4>Welcome back </h4>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p>
            Don't have an accout ?<Link to="/signup">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
