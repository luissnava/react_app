import React from 'react'
import TaskCard from './TaskCard'
import { Content } from '../context/Contexto'
import { useContext } from 'react'
function TaskList() {
    const {tasks} = useContext(Content)
    if (tasks.length === 0) {
        return <h1 className='text-white text-4xl font-bold-200 text-center'>No hay tareas</h1>
    }
    return (
        <div className='grid grid-cols-4 gap-2'> {
            tasks.map((task) => (
               <TaskCard 
               key={task.id} 
               task={task} />
            ))
        } </div>
    )

}

export default TaskList
