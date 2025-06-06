const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");

const app = express();
app.use(cors());

dotenv.config();
connectDB();
const port = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello chiatra class ");
});

app.use("/api/auth", require("./routes/Auth"));
app.use("/api/product", require("./routes/Products"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
