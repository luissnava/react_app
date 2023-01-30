import {React,useContext, useEffect, useState} from 'react'
import { Content } from '../context/Contexto'

function Formulario() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(Content)

    const handleSubmt = (event) =>{
        event.preventDefault();
        createTask({
          title,
          description
        })
        setDescription("")
        setTitle("")
    }

    
  return (
    <div className='bg-neutral-800 p-10 mb-10 max-w-md mx-auto'>
      <form onSubmit={handleSubmt}>
        <h1 className='text-2xl text-white font-bold mb-3'>Crea tu Tarea</h1>
        <input 
        className='bg-slate-300 p-10 mb-4 '
        autoFocus
        placeholder='Esctibe la tarea ' 
        value={title} type="text"
        onChange={(event)=>{
            // console.log(event.target.value)
            setTitle(event.target.value)
        }}/>
        <textarea 
        className='bg-slate-300 mb-4 p-10'
        cols="30" 
        rows="10" 
        value={description}
        onChange={(event) =>{
          setDescription(event.target.value)
        }}></textarea>
        <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
      </form>
    </div>
  )
}

export default Formulario
