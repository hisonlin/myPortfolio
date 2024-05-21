import React from 'react'
import PropTypes from 'prop-types'
import './Skill.css'
import SkillCard from './SkillCard'

const Skill = props => {
  return (
    <div>
    <div className="hover-underline-animation">
        SKILLS
    </div>
    <SkillCard />
    </div>
  )
}

Skill.propTypes = {

}

export default Skill
