const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const app = express();

dotenv.config();
connectDB();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello chiatra class ");
});
app.get("/about", (req, res) => {
  res.send("This is about page");
});
app.get("/contact/address", (req, res) => {
  res.send("i am from kathmandu");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
