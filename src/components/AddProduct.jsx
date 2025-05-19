import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    instock: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleChange = (e) => {
    if (e.target.type == "file") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
      console.log("file upload ", e.target.files[0]);
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };
  return (
    <div className="container">
      <h4>this is add product page</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            value={product.description}
            onChange={handleChange}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instock</label>
          <input
            type="number"
            value={product.instock}
            onChange={handleChange}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            onChange={handleChange}
            multiple
            className="form-control"
            id="title"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
