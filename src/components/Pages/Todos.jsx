import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../Nav";
import { Loading } from "../Loading";

export const Todos = () => {

  const [isLoadingg, setIsLoading] = useState(true);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  let userData = useSelector((state) => state.user.user.userData[0]);
  console.log(JSON.stringify(userData));

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(addTask({ task }));
    dispatch(fetchTasks());
    setTask("");
  };

  setTimeout(() => {
    setIsLoading(false)
}, 2000);

  return (
    <>
    {isLoadingg ? <Loading /> : (
       <div>
       <Nav />
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
     </div>
    )}
    </>
  );
};
