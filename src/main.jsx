import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import { ContextProvider } from './context/Contexto'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ContextProvider>
      <App />
    </ContextProvider>
    
  </React.StrictMode>
)
