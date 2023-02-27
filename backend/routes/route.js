const express = require("express");
const {
  gettasks,
  gettask,
  addtask,
  home,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", home);

//post request to add a task
router.post("/add", addtask);

//get request to get all tasks
router.get("/tasks", gettasks);

//get request to get a single ta
router.get("/tasks/:id", gettask);

module.exports = router;
