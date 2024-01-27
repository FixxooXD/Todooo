import React from "react";
import { useSelector } from "react-redux";

export const Todo = ({todos}) => {
    console.log(todos);

  return (
          <ul className='flex flex-col w-[90%] mt-5'>
           {todos.map(todo => {
            return <div className="flex px-5 items-center my-2 border shadow-3xl" key={todo._id}>{todo.task}</div>
           })}
            {/* <div className='w-16 px-1 flex justify-between items-center'> */}
             {/* <FontAwesomeIcon className='text-white text-xl' icon={faPenToSquare} onClick={() =>updateTodo(task.id)} />
             <FontAwesomeIcon className='text-white text-xl' icon={faTrash} onClick={() => deleteTodo(task.id)} /> */}
             {/* </div> */}
          </ul>
       )
      }
