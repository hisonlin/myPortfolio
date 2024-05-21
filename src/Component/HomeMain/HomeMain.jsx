import React from 'react'
import PropTypes from 'prop-types'
import './HomeMain.scss'

const urls = {
    linkedin: 'https://www.linkedin.com/in/hisonlin/',
    resume: 'https://www.google.com',
    github: 'https://github.com/hisonlin'
  };
  
  const handleButtonClick = (key) => {
    window.open(urls[key]);
  }

const HomeMain = props => {
  return (
    <div id="logoContainer">
      <div className="subtitle">Portfolio By Hison Lin</div>
      <div className="glitch" data-text="H.Lin">H.Lin</div>
      <div className="subtitle">FULL-STACK DEVELOPER</div>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", marginTop: "5vh" }}>
        <div>
          <button className="button" onClick={() => handleButtonClick('linkedin')}> 
            Linkedin
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </div>
        <div>
          <button className="button" onClick={() => handleButtonClick('resume')}>
            Resume
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </div>
        <div>
          <button className="button" onClick={() => handleButtonClick('github')}>
            Github
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </div>
      </div>
      
    </div>
  )
}

HomeMain.propTypes = {

}

export default HomeMain
