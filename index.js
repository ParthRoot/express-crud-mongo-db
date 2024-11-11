const express = require("express");
const mongoose = require("mongoose");

const productRoute = require("./routes/product.route.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello This is node api");
});

mongoose
  .connect(
    "mongodb+srv://username:password@node-crud.uuodp.mongodb.net/test-crud?retryWrites=true&w=majority&appName=Node-CRUD"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server are running on PORT: 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
