import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateTask } from "../store/todoSlice";

const EditTask = ({ todoId, task }) => {

  const dispatch = useDispatch();
  const [updatedTask, setUpdatedTask] = useState(task);
  const handleChange = (e) => {
    setUpdatedTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatedTask);
    dispatch(UpdateTask({todoId, updatedTask }))
  };

  console.log(todoId);

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-5 border">
      <div key={todoId} className="flex px-5 ">
        <input
          type="text"
          value={updatedTask}
          onChange={handleChange}
          placeholder="start task"
          className="border-2 px-4 mx-2"
        />
        <button className="border-2 w-24">Update task</button>
      </div>
    </form>
  );
};

export default EditTask;
