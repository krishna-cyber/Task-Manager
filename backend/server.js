const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//importing required files
// const dbConnection = require("./config/Dbconnection");

//loading env variables
require("dotenv").config();

//creating server app
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//creating routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Database connection and server listening

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log(`Database connected on ${conn.connection.host}`);
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
