import React from 'react'
import './Header.css'
import CTA from '../header/CTA'
import ME from '../../assets/me1-removebg-preview.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Aditya Kumar Shome</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img style={{ width: '105%', height: '100%'}} src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

