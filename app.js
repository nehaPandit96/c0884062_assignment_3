const express = require("express");
const path = require("path");
const app = express();

const SERVER_PORT = process.env.PORT || 3000;
const NAME = process.env.NAME || "Neha";

// Route for the Home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Route for the Products page
app.get("/products", (req, res) => {
  res.sendFile(__dirname + "/views/products.html");
});

// Start the server
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
  console.log(`Name: ${NAME}`);
});
