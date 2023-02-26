const express = require("express");
const Task = require("../models/taskModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/add", (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);
  //saving task to the database using promise
  task
    .save()
    .then((result) => {
      console.log(result);
      res.send("created successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;
