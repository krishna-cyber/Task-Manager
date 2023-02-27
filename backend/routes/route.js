const express = require("express");
const Task = require("../models/taskModel");
const { gettask, addtask, home } = require("../controllers/taskController");

const router = express.Router();

router.get("/", home);

//post request to add a task
router.post("/add", addtask);

//get request to get all tasks
router.get("/tasks", gettask);

module.exports = router;
