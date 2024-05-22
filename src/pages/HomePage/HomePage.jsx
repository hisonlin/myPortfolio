import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Component/Header/Header'
import HomeMain from '../../Component/HomeMain/HomeMain'

import SkillCard from '../../Component/Skill/SkillCard'
import MakeAwesome from '../../Component/MakeAwesome/MakeAwesome'
import Footer from '../../Component/Footer/Footer'

const HomePage = props => {
  return (
    <>
    <Header />
    <HomeMain/>
    <SkillCard/>
    <Footer/>
  </>
  )
}

HomePage.propTypes = {

}

export default HomePage
