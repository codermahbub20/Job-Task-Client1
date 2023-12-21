import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const CreateTask = () => {
  const { register, handleSubmit, control } = useForm();
  const [data, setData] = useState("");
  

  const onSubmit = (formData) => {
    setData(JSON.stringify(formData));
  };

  console.log(data)

  return (
    <div>
        <h1 className="text-3xl font-medium mb-4 mt-4 text-center">Create Your Task </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex md:px-24">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text text-xl">Assignment Title</span>
            </label>
            <input
              type="text"
              placeholder="Assignment Title"
              className="input input-bordered"
              {...register("title")}
            />
          </div>
          <div className="form-control lg:ml-4 lg:w-1/2">
            <label className="label">
              <span className="label-text text-xl">Assignment Description</span>
            </label>
            <input
              type="text"
              placeholder="Assignment Description"
              className="input input-bordered"
              {...register("description")}
            />
          </div>
        </div>

        
        <div className="lg:flex md:px-24">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text text-xl">Assignment Level</span>
            </label>
            <select
              name="level"
              className="select text-xl select-ghost w-full input input-bordered"
              {...register("level")}
            >
              <option disabled selected>
                Enter Your Assignment Level
              </option>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          <div className="form-control lg:ml-4 lg:w-1/2">
            <label className="label">
              <span className="label-text text-xl">Assignment Due Date</span>
            </label>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DatePicker
                  className="input w-full input-bordered"
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                />
              )}
            />
          </div>
        </div>
        
        <div className="form-control md:px-24 w-full">
          <input
            className="btn mt-3 w-full mx-auto border-2 border-white text-white hover:bg-[#FF3811] bg-[#FF3811]"
            type="submit"
            value="Create Task"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
