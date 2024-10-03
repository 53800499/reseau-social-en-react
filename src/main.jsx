import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './page/Dashboard/Dashboard.jsx'
import Connexion from './page/Connexion/Connexion.jsx'
import Inscription from './page/Inscription/Inscription.jsx'
import { Toaster } from 'react-hot-toast'


const route = createBrowserRouter([
  {
    path:"/",
    element: <Dashboard/>
  }
  ,{
    path:"/connexion",
    element:<Connexion/>
  }
  ,{
    path:"/inscription",
    element:<Inscription/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster/>
    <RouterProvider router = {route} />
  </StrictMode>,
)
