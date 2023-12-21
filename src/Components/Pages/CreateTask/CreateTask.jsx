import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axiosPublic from "../../Hook/axiosPublic";
import Swal from "sweetalert2";


const CreateTask = () => {
    const { register, handleSubmit, control } = useForm();
    const [data, setData] = useState("");


    const onSubmit = (formData) => {
        setData(JSON.stringify(formData));

        axiosPublic.post('task', formData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Create Done',
                        icon: 'success',
                        confirmButtonText: 'Great',
                    });
                }
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };




    return (
        <div>
            <h1 className="text-3xl font-medium mb-4 mt-4 text-center">Create Your Task </h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:flex md:px-24">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl">Task Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Task Title"
                            className="input input-bordered"
                            {...register("title")}
                        />
                    </div>
                    <div className="form-control lg:ml-4 lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl">Task Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Task Description"
                            className="input input-bordered"
                            {...register("description")}
                        />
                    </div>
                </div>


                <div className="lg:flex md:px-24">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl">Task Level</span>
                        </label>
                        <select
                            name="level"
                            className="select text-xl select-ghost w-full input input-bordered"
                            {...register("level")}
                        >
                            <option disabled selected>
                                Enter Your Task Level
                            </option>
                            <option value="easy">Low</option>
                            <option value="medium">Moderate</option>
                            <option value="hard">High</option>
                        </select>
                    </div>
                    <div className="form-control lg:ml-4 lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl">Task Due Date</span>
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
