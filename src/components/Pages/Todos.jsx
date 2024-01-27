import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../Nav";
import { Loading } from "../Loading";
import { AddTask } from "../../store/todoSlice";
import { Todo } from "../Todo";

export const Todos = () => {
  let loading = useSelector((state) => state.user.loading)
  const [isLoadingg, setIsLoading] = useState(loading);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  let userData = useSelector((state) => state.user.userData[0]);

  let user = useSelector((state) => state.user.userData[0]);
  let todos = useSelector((state) => state.user.todos);
  // console.log(JSON.stringify(userData));


  const handleChange = (e) => {
    setTask(e.target.value);

  };

  const handleClick = (event) => {
    event.preventDefault();
    if (task === "") {
      console.log("Enter a Valid Task")
    }else {
    dispatch(AddTask({ user, task }));
    // dispatch(fetchTasks());  
    setTask("");
    console.log(todos.todo);
    } 
  }

  setTimeout(() => {
    setIsLoading(false)
}, 2000);

  return (
    <>
    {isLoadingg ? <Loading /> : (
       <div className="flex flex-col items-center">
       <Nav user={user}/>
       <form onSubmit={handleClick} className="flex justify-center mt-5">
         <div className="flex ">
           <input
             type="text"
             value={task}
             onChange={handleChange}
             placeholder="start task"
             className="border-2 px-4 mx-2"
           />
           <button className="border-2 w-24">Add task</button>
         </div>
       </form>
       <Todo todos={todos} />
     </div>
    )}
    </>
  );
};
