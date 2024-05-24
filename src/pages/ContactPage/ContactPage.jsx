import React from 'react'
import PropTypes from 'prop-types'
import Headers from '../../Component/Header/Header'
import './ContactPage.css'
import HeaderLogo from '../../Component/HeaderLogo/HeaderLogo'

const ContactPage = props => {
  return (
    <div>
      <Headers />
      <div className='contact-container'>
        <div className='contact-body'>
        <div className='contact-method'>
          BY EMAIL
        </div>
        <div className='contact-detail'>
          hisonlinca@gmail.com
        </div>
        <div className='contact-method'>
          BY PHONE
        </div>
        <div className='contact-detail'>
          778-892-5633
        </div>
        </div>
        <div className='contact-footer'>
          <div className='contact-footer-left'>
            <div style={{fontWeight:'600', letterSpacing:'0.2em', marginBottom:'1vh'}}>
              CONTACT
              </div>
            <div style={{marginBottom:'1vh', letterSpacing:'0.1em'}}>Interested in working together?</div>
            <div style={{marginBottom:'1vh', letterSpacing:'0.1em'}}>Feel free to reach out to me!</div>
            <div style={{letterSpacing:'0.1em'}}>hisonlinca@gmail.com</div>
          </div>
          <div className='contact-footer-right'>
            <div className='contact-copyright' style={{fontWeight:'600', letterSpacing:'0.2em'}}>© HISON LIN 2024</div>
            <div className='logo'><HeaderLogo /></div>           
          </div>
        </div>
      </div>
    </div>
  )
}

ContactPage.propTypes = {

}

export default ContactPage
