import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Component/Header/Header'
import ProjectsCard from '../../Component/ProjectsCard/ProjectsCard'
import Footer from '../../Component/Footer/Footer'

const ProjectsPage = props => {
  return (
    <div>
      <Header/>
      <ProjectsCard/>
      <Footer/>
    </div>
  )
}

ProjectsPage.propTypes = {

}

export default ProjectsPage
