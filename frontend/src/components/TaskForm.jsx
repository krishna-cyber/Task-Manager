import server from "../../public/config/server";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const TaskForm = ({ fetchData, editing }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await server
      .post("http://localhost:3000/tasks/add", data)
      .then((res) => {
        toast.success("Task added successfully !");
        fetchData();
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.message}🥺`);
      });
  };
  return (
    <>
      <form
        className=' flex  items-center justify-between'
        onSubmit={handleSubmit(onSubmit)}>
        <input
          className=' p-1 w-full mr-4 outline-none rounded-md px-3 bg-slate-300'
          {...register("title", { required: true })}
          placeholder='Add a task'
        />
        <button className='btn cursor-pointer' type='submit'>
          {editing ? "edit" : "submit"}
        </button>
      </form>
    </>
  );
};

export default TaskForm;
