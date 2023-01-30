import React from 'react'
import { tasks } from '../data/Task'
import { useContext } from "react";
import { Content } from '../context/Contexto';
function TaskCard({task}) {
  const {deleteTask} = useContext(Content);
  return (
    
    <div key={task.id} className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500 text-sm'>{task.descrip}</p>

      <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300' onClick={()=> deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  )
}

export default TaskCard
