import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Headers from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import './AboutPage.css'
import Timeline from '../../Component/Timeline/Timeline'

const AboutPage = props => {
  
  return (
    <div>
      <Headers />
      <div className='about-title'>About Hison</div>
      <div className='aboutContainer'>
        <div className='about'>
          <p>I am a passionate developer from Hong Kong. I and my family moved to Vancouver in Aug 2022, now living in Coquitlam and I am filled anticipation for the days ahead.</p>
          <p>In Hong Kong, I worked as a Financial Planning Manager for 10 years. This experience enhanced my abilities in self-learning, analysis, and management, making me a self-disciplined individual capable of effective communication with others. </p>
          <p>I graduated from Vancouver Community College in April 2024, with a passion for creating websites and software applications. I've worked on various projects, enhancing my skills in  the entire software development lifecycle using different frameworks, specializing in user interfaces and integrating them with web and mobile applications. Additionally, I have experience with databases, adding depth and interactivity to my applications.</p>
          <p>At home, I am a father to two children, enjoy exploring the world with my children. I also love playing various sports like basketball, football, and badminton and I am passionate about studying various development technologies. I am committed to continuous learning and becoming a better version of myself, eagerly anticipating new challenges in the future.</p>
        </div>
        <div className='aboutImage'>
          <div className='photo'/>
        </div>
      </div>
      <div className="timeline">
        <Timeline />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>

  )
}

AboutPage.propTypes = {

}

export default AboutPage
