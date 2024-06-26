const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const PORT = process.env.PORT || 3010;
const usersRoute = require("./routes/authRoutes");
const ProductRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const path = require("path");

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/product", ProductRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/feedback", feedbackRoutes);
app.get("/", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is successfully running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
