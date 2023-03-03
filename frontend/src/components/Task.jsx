import { FaCheckDouble, FaEdit, FaTrashAlt } from "react-icons/fa";

const Task = ({ key, task, index }) => {
  return (
    <>
      <div
        id={key}
        className=' flex justify-between p-3 mt-3 border-l-8 bg-slate-300 rounded-md border-orange-600'>
        <p>
          {index + 1}. {task.title}
        </p>
        <div className='flex gap-3'>
          <FaCheckDouble className=' text-green-500 cursor-pointer' />
          <FaEdit className=' text-purple-500 cursor-pointer' />
          <FaTrashAlt className=' text-red-500 cursor-pointer' />
        </div>
      </div>
    </>
  );
};

export default Task;
