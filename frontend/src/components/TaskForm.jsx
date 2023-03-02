import { useForm } from "react-hook-form";

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form
        className=' flex  items-center justify-between'
        onSubmit={handleSubmit(onSubmit)}>
        <input
          className=' p-1 w-full mr-4 outline-none rounded-md px-3 bg-slate-300'
          {...register("example")}
          placeholder='Add a task'
        />

        <input className='btn' type='submit' />
      </form>
    </>
  );
};

export default TaskForm;
