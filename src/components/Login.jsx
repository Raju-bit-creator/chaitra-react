import React from "react";
import image from "../assets/img.jpg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = React.useState({
    email: "",
    password: "",
  });
  console.log("this is credential name", credential);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credential;
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data) {
      localStorage.setItem("token", data.authToken);
      navigate("/");
    }

    console.log(data);
    console.log(" login form submitted");
  };
  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={image} alt="form image" />
        </div>
        <div className="col-md-6">
          <h4>Welcome back </h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={credential.email}
                name="email"
                onChange={handleChange}
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
                // type= text?icolse icon: eye open icon
                value={credential.password}
                name="password"
                onChange={handleChange}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            <p>
              Already have an account ?<Link to="/signup">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
