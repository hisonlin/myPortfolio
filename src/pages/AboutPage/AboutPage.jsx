import React from 'react'
import PropTypes from 'prop-types'
import Headers from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import './AboutPage.css'
import Timeline from '../../Component/Timeline/Timeline'

const AboutPage = props => {
  return (
    <div>
      <Headers />
      <div className='aboutContainer'>
        <div className='about'>
          <p>Rachael is a Creative Director from Los Angeles, now living in a small village in Belgium halfway between Antwerp and Brussels.</p>
          <p>In her 15+ years of creative, brand and digital marketing experience she has worked with a variety of elevated fashion and lifestyle brands, particularly for women + the modern mother</p>
          <p>Rachael takes a unique, holistic approach to her work - far different than traditional creatives or marketers. Rachael’s method leads with a consistent, considered visual brand and a clear understanding of her client’s goals and purpose to inform intentional, strategic efforts that get results.</p>
          <p>At home, Rachael is a mother to two children, a sourdough bread baker, a new runner and never without a self help book in hand. Rachael also hosts the podcast Foundational Living - exploring style, simplicity and self development. Her current intention is to do something that makes her uncomfortable everyday.</p>
        </div>
        <div className='aboutImage'>
          <img src="https://images.squarespace-cdn.com/content/v1/5833524ad2b857c868b31c6f/1604514259429-DI09LPDH68D3VQIR5DSI/Rachael%2BDesztich.jpg?format=1000w" alt="hison" />
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
