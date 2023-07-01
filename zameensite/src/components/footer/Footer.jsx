import React from 'react'
import roshandigital from '../../asset/roshandigital.png'
import facebook from '../../asset/facebook.png'
import twitter from '../../asset/twitter.png'
import youtube from '../../asset/youtube.png'
import linkedin from '../../asset/linkedin.png'
import insta from '../../asset/instagram.png'
const Footer = () => {
  return (
    <footer>
    <div className="about-company-wrapper">
      <div className="about-company">
        <h5>Company</h5>
        <ul>
          <li><a href="" className="m-0">About Us</a></li>
          <li><a href="" className="m-0">Contact Us</a></li>
          <li><a href="" className="m-0">Jobs</a></li>
          <li><a href="" className="m-0">Help & Support</a></li>
          <li><a href="" className="m-0">Advertise On Zameen</a></li>
          <li><a href="" className="m-0">Terms Of Use</a></li>
        </ul>
      </div>
      <div className="about-company d-none d-md-block">
        <h5>Connect</h5>
        <ul>
          <li><a href="" className="m-0">Blog</a></li>
          <li><a href="" className="m-0">News</a></li>
          <li><a href="" className="m-0">Forum</a></li>
          <li><a href="" className="m-0">Expo</a></li>
          <li><a href="" className="m-0">Real Estate Agents</a></li>
          <li><a href="" className="m-0">Add Property</a></li>
        </ul>
      </div>
      <div className="about-company d-none d-md-block">
        <h5>Head Office</h5>
        <ul>
          <li>
            <a href="" className="m-0"><span className="material-symbols-outlined"> location_on </span></a>
            <a href="">Pearl One, 94-B/I, MM Alam Road, Gulberg III, Lahore, Pakistan</a>
          </li>
          <li>
            <a href=""><span className="material-symbols-outlined"> call </span></a>
            <a href="">0800-ZAMEEN (92633)</a>
          </li>
          <li>
            <a href=""><span className="material-symbols-outlined"> mail </span></a>
            <a href="">Email Us</a>
          </li>
        </ul>
      </div>
      <div className="about-company">
        <h5>Roshan Digital Account</h5>
        <ul>
          <li><a href=""><img style={{ width: '80px' }} src={roshandigital} alt=""/></a></li>
          <li><a href=""><h5 style={{ marginBottom: '0px' }}>Get Connected</h5></a></li>
          <div className="logo-parent">
            <li><a href=""><img src={facebook} alt=""/></a></li>
            <li><a href=""><img src={twitter} alt=""/></a></li>
            <li><a href=""><img src={youtube} alt=""/></a></li>
          </div>
          <div className="logo-parent-2">
            <li><a href=""><img src={linkedin} alt=""/></a></li>
            <li><a href=""><img src={insta} alt=""/></a></li>
          </div>
        </ul>
      </div>
    </div>
    <div className="copyright">
      <p>© Copyright 2007 - 2022 Zameen.com. All Rights Reserved</p>
    </div>
  </footer>
  
  )
}

export default Footer