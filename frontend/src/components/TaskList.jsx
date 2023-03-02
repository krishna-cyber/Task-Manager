import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
Task;

const TaskList = () => {
  return (
    <>
      <div className='task bg-slate-200 p-4 w-[30%] rounded-lg'>
        <h1 className=' text-2xl mb-4'>Task Manager</h1>
        <TaskForm />
        <div className=' mt-2 flex justify-between'>
          <span className=' font-semibold flex'>
            <p>Total Tasks: </p>
            <span className='text-red-500 ml-2'>{4}</span>
          </span>
          <span className=' font-semibold flex'>
            <p>Completed Tasks: </p>
            <span className=' text-green-400 ml-2'>{2}</span>
          </span>
        </div>
        <hr className=' bg-slate-600 h-[2px] border-none' />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </>
  );
};

export default TaskList;
