/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosPublic from "../../Hook/axiosPublic";

const TaskCard = ({ task, index, moveTask, status }) => {
  const [{ isDragging }, ref] = useDrag({
    type: 'TASK',
    item: { index, status },
  });

  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (draggedItem) => {
      if (draggedItem.index !== index || draggedItem.status !== status) {
        moveTask(draggedItem.index, index, draggedItem.status, status);
        draggedItem.index = index;
        draggedItem.status = status;
      }
    },
  });

  if (!task) {
    return null;
  }

  return (
    <div ref={(node) => ref(drop(node))} className={`mb-2 task-card ${isDragging ? 'dragging' : ''}`} key={task?._id}>
      <div className="card w-96 bg-green-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{task.title}</h2>
          <p>{task.description}</p>
          <p>Deadline: {task.date}</p>
          <p>Priority: {task.level}</p>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, tasks, moveTask, status }) => {
  const [, sectionRef] = useDrop({
    accept: 'TASK',
    drop: (draggedItem) => {
      moveTask(draggedItem.index, tasks.length, draggedItem.status, status);
      draggedItem.index = tasks.length;
      draggedItem.status = status;
      toast.success(`Task moved to ${title}`);
    },
  });

  return (
    <div ref={sectionRef} className="mt-4">
      <h1 className="text-3xl text-center mb-3 text-red-500">{title}</h1>
      {tasks.map((task, index) => (
        <TaskCard key={task?._id} task={task} index={index} moveTask={moveTask} status={status} />
      ))}
    </div>
  );
};

const AllTask = () => {
  const [tasks, setTasks] = useState({ todo: [], ongoing: [], completed: [] });

  useEffect(() => {
    axiosPublic.get('/task')
      .then((res) => {
        setTasks({ todo: res.data, ongoing: [], completed: [] });
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
        toast.error('Error fetching tasks');
      });
  }, []);

  const moveTask = (fromIndex, toIndex, fromStatus, toStatus) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      const [movedTask] = updatedTasks[fromStatus].splice(fromIndex, 1);
      updatedTasks[toStatus].splice(toIndex, 0, movedTask);
      return {
        ...updatedTasks,
        [fromStatus]: [...updatedTasks[fromStatus]],
        [toStatus]: [...updatedTasks[toStatus]],
      };
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-3 mx-auto">
        <Section title="To-Do Task" tasks={tasks.todo} moveTask={moveTask} status="todo" />
        <Section title="OnGoing Task" tasks={tasks.ongoing} moveTask={moveTask} status="ongoing" />
        <Section title="Completed Task" tasks={tasks.completed} moveTask={moveTask} status="completed" />
      </div>
      <ToastContainer />
    </DndProvider>
  );
};

export default AllTask;
