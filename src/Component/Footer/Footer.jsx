import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = props => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/myPortfolio/contact')
  }


  return (
    <>
      <div className='footerContainer' onClick={() => handleClick()}>
        <div className='firstSentence'>HAVE A PROJECT?</div>
        <div className='secondSentence'>LET'S TALK.</div>
        <div className='thirdSentence'>I am always on the hunt for new challenges.</div>
      </div>
      <div className='copyright'>© HISON LIN 2024</div>
    </>

  )
}

Footer.propTypes = {

}

export default Footer
