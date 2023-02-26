const express = require("express");
const Task = require("../models/taskModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

//post request to add a task
router.post("/add", async (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);
  //saving task to the database using promise
  await task
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

//get request to get all tasks
router.get("/tasks", async (req, res) => {
  await Task.find({})
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("unable to get tasks");
    });
});

module.exports = router;
