import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faCheck,
  faC,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteTask, editTask } from "../store/todoSlice";
import EditTask from "./EditTask";

export const Todo = ({ todos, user }) => {
  // console.log(user._id);

  const dispatch = useDispatch();

  const handleEdit = (props) => {
    dispatch(editTask(props));
  };

  const handleDelete = (props) => {
    dispatch(DeleteTask(props))
  };

  return (
    <ul className="flex flex-col w-[90%] mt-5">
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTask todoId={todo._id} task={todo.task}  />
        ) : (
          <div
            className="flex justify-between px-5 p-2 items-center my-2 border shadow-3xl"
            key={todo._id}>
            <span>{todo.task}</span>
            <div key={todo._id} className="flex justify-between w-12">
              <span
                onClick={() => handleEdit({ id: todo._id, task: todo.task })}>
                {<FontAwesomeIcon icon={faPenToSquare} />}
              </span>
              <span onClick={() => handleDelete({ userId: user._id, taskId: todo._id})} >{<FontAwesomeIcon icon={faTrash} />}</span>
            </div>
          </div>
        )
      )}
    </ul>
  );
};
