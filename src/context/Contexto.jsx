import {createContext, useState, useEffect} from "react"
import {tasks as data} from "../data/Task"

export const Content = createContext()

export function ContextProvider(params) {

    const [tasks, setTasks] = useState([])

    function createTask(newTask) {
        setTasks([
            ...tasks, {
                title: newTask.title,
                id: tasks.length,
                descrip: newTask.description
            }
        ])
    }

    function deleteTask(taskId) {

        let cambio = tasks.filter(task => task.id !== taskId)

        setTasks(cambio)
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    return (<Content.Provider value={
        {
            tasks,
            createTask,
            deleteTask
        }
    }> {
        params.children
    } </Content.Provider>)
}
