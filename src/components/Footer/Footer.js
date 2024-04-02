import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className='social-links'>
            <img src={Github} alt="pic" />
            <img src={Instagram} alt="pic" />
            <img src={LinkedIn} alt="pic" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="pic" />
        </div>
      </div>
      <div className='blur blur-f-1'></div>
      <div className='blur blur-f-2'></div>
    </div>
  );
}

export default Footer
