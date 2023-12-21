import { useEffect, useState } from "react";
import axiosPublic from "../../Hook/axiosPublic";


const AllTask = () => {

    const [allTask, setAllTask] = useState([])

    useEffect(() => {
        axiosPublic.get('/task')
            .then((res) => {
                setAllTask(res.data);
            })
    }, [])

    return (
        <div className="grid grid-cols-3 mx-auto">
            <div className="mt-4">
                <h1 className="text-3xl text-center mb-3 text-red-500">To-Do Task</h1>
                {
                    allTask?.map(task => <div className="mb-2" key={task._id}>
                        <div className="card w-96 bg-green-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{task.title}</h2>
                                <p>{task.description}</p>
                                <p>Deadline: {task.date}</p>
                                <p>Priority: {task.level}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>


            <div>
                <h1 className="text-3xl text-center mb-3 text-red-500">OnGoing Task</h1>
            </div>


            <div>
                <h1 className="text-3xl text-center mb-3 text-red-500">Completed Task</h1>
            </div>
        </div>
    );
};

export default AllTask;