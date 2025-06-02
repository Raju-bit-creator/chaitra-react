const express = require("express");
const Product = require("../model/Product");
const fetchUser = require("../middleware/Fetchuser");
const router = express.Router();

router.post("/addproduct", fetchUser, async (req, res) => {
  try {
    const { title, price, description, instock } = req.body;
    const product = new Product({
      title,
      price,
      description,
      instock,
      user: req.user.id,
    });
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
