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
      <Route path="myPortfolio/" element={<HomePage />} />
      <Route path="myPortfolio/about" element={<AboutPage />} />
      <Route path="myPortfolio/experience" element={<ExperiencePage />} />
      <Route path="myPortfolio/projects" element={<ProjectsPage/>} />
      <Route path="myPortfolio/contact" element={<ContactPage/>} />
     </Routes>
     
    </>
  )
}

export default App
