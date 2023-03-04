import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import loader from "../assets/loader.gif";

// const setTasks = async () => {};
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, isEditing] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:3000/tasks")
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const deletask = async (id) => {
    await axios
      .delete(`http://localhost:3000/tasks/${id}`)
      .then((res) => {
        fetchData();
        toast.success("Task deleted successfully !");
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.message}🥺`);
      });
  };

  const getSingleTask = (task) => {
    isEditing(true);
    console.log(task);
  };

  return (
    <>
      <div className='task bg-slate-200 p-4 w-[30%] rounded-lg'>
        <h1 className=' text-2xl mb-4'>Task Manager</h1>
        <TaskForm fetchData={fetchData} editing={editing} />
        <div className=' mt-2 flex justify-between'>
          <span className=' font-semibold flex'>
            <p>Total Tasks: </p>
            <span className='text-red-500 ml-2'>{tasks.length}</span>
          </span>
          <span className=' font-semibold flex'>
            <p>Completed Tasks: </p>
            <span className=' text-green-400 ml-2'>{0}</span>
          </span>
        </div>
        {loading && (
          <div className=' flex justify-center items-center'>
            <img src={loader} alt='loader' />
          </div>
        )}

        <hr className=' bg-slate-600 h-[2px] border-none' />
        {!loading && tasks.length === 0 && (
          <div className=' flex justify-center items-center'>
            <p className=' text-red-500'>No tasks found</p>
          </div>
        )}
        {!loading &&
          tasks.map((task, index) => {
            return (
              <Task
                key={task._id}
                task={task}
                index={index}
                deletask={deletask}
                getSingleTask={getSingleTask}
              />
            );
          })}
      </div>
    </>
  );
};

export default TaskList;
