import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

const Footer = props => {
  return (
    <div className='footerContainer'>
        <div className='firstSentence'>HAVE A PROJECT?</div>
        <div className='secondSentence'>LET'S TALK.</div>
        <div className='thirdSentence'>I am always on the hunt for new challenges.</div>
    </div>
  )
}

Footer.propTypes = {

}

export default Footer
