import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Component/Header/Header'
import HomeMain from '../../Component/HomeMain/HomeMain'

import SkillCard from '../../Component/Skill/SkillCard'

const HomePage = props => {
  return (
    <>
    <Header />
    <HomeMain/>
    <SkillCard/>
  </>
  )
}

HomePage.propTypes = {

}

export default HomePage
