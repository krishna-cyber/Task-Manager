const Task = require("../models/taskModel");

//homepage
const home = (req, res) => {
  res.send("Hello World");
};

//get all tasks
const gettasks = async (req, res) => {
  await Task.find({})
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("unable to get tasks");
    });
};

//add a task
const addtask = async (req, res) => {
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
};

//get a single task
const gettask = async (req, res) => {
  console.log(req.params);
  await Task.findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("unable to get task");
    });
};

module.exports = {
  home,
  gettasks,
  gettask,
  addtask,
};
