import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {MdDeleteForever} from "react-icons/md"
import { addTask,deleteTask } from './store'

const Todo = () => {

    const[task,settask]=useState('')
  const tasks=  useSelector((state)=>state.task);
 // console.log(state);
  const dispatch=useDispatch();

  const handleFromSubmit=(e)=>{
    e.preventDefault();
    dispatch(addTask(task))
    return settask("")
  }

  const handleTaskdelete=(id)=>{
    return dispatch(deleteTask(id))
  }
  return (
    <div className='container'>
      <div className='todo-app'>
        <h1>
            <i className='fa-regular fa-pen-to-square'>
                </i> Todo App
        
        </h1>
        <div className='row'>
        <form onSubmit={handleFromSubmit}>
        <input type="text" id="input-box"
        value={task} onChange={(e)=>
          settask( e.target.value)
        }
        placeholder="Enter a task"/>
        <button>Add Task</button>
        </form>
      </div>
      <ul id="list-container">
{
    tasks.map((currtask,index)=>{
        return (
            <li key={index}>
                <p>
                    {index}:{currtask}
                </p>
                <div>
                <MdDeleteForever
                    className="icon-style"
                    onClick={()=>handleTaskdelete(index)}
                    />
                </div>
            </li>
        )
    })
}
      </ul>
      
    </div>
    
    </div>
  )
}

export default Todo
