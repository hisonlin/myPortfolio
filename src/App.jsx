import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactPage from './pages/ContactPage/ContactPage'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/projects" element={<ProjectsPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
     </Routes>
     
    </>
  )
}

export default App
