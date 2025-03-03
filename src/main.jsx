import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import Route from './routes/Route.jsx'
import Authentication from './authentication/Authentication.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
    <RouterProvider router={Route}></RouterProvider>
    </Authentication>
  </StrictMode>,
)
