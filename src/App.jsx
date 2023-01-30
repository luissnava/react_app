import React from 'react'
import Formulario from './components/Formulario'
import TaskList from './components/TaskList'

function App() {

    return (<>
        <main className='bg-zinc-900 h-screen'>
            <div className='container mx-auto'>

                <Formulario/>
                <TaskList/>
            </div>

        </main>

    </>)
}

export default App
