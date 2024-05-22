import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactPage from './pages/ContactPage/ContactPage'

const router= createBrowserRouter([{
  path: 'myPortfolio/',
  element: <HomePage />,
  children: [
    { path: 'myPortfolio/', element: <HomePage /> },
    { path: 'myPortfolio/about', element: <AboutPage /> },
    { path: 'myPortfolio/experience', element: <ExperiencePage /> },
    { path: 'myPortfolio/projects', element: <ProjectsPage /> },
    { path: 'myPortfolio/contact', element: <ContactPage /> },
  ],

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
