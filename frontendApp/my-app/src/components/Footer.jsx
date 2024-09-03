import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";
import './Footer.css';
import facebookIcon from '../Media/fbook.jpg';
import instagramIcon from '../Media/instagram.jpeg';
import twitterIcon from '../Media/X.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* First Column */}
        <div className="footer-column contact-info">
          <p> 
            
          At Kash Logistics, we’re dedicated to redefining your security experience. With our innovative solutions and exclusive offers, you can trust us to protect what matters most. Discover the difference today!
            
            
            
            <br/>
            <MdOutlineLocationOn className='icon' /> Accra, Ghana
            
            <br/>
            <BsFillTelephoneFill className='icon' /> +233 501 382 035
            <br />
            <FaEnvelope className='icon' /> dcs@ug.edu.gh
            <br />
            <CgWebsite className='icon' /> https://kashlogistics.com
            <br />
            <CiClock2 className='icon'/>Mon-Fri 9:00am-7:00pm, 
            <br/>
            <span className="operating-hours">Sat 10:00am-4:00pm GMT</span>
          </p>
        </div>

        {/* Second Column */}
        <div className="footer-column footer-links">
        <h4 className="header-title"><b>INFORMATION</b></h4>
          
            <Link to="/about">About Us</Link>
            <Link to="/shop">Shop </Link>
            <Link to="/event">Event</Link>
          
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()}, Kash Logistics. All Rights Reserved</p>
          </div>
        </div>

        {/* Third Column */}
        <div className="footer-column footer-links">
          <h4 className="header-title"><b>OUR SERVICES</b></h4>
          
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          
        </div>

        {/* Fourth Column */}
        <div className="footer-column footer-links">
        <h4 className="header-title"><b>MY ACCOUNT</b></h4>
          
            <Link to="/account">My account</Link>
            <Link to="/Cart">My Cart</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/order">Orders</Link>
        </div>

        {/* Fifth Column */}
        <div className="footer-column social-icons">
        <h4 className="header-title"><b>NEWSLETTER</b></h4>
        <p>Subscribe to our mailing list to</p> 
        <p>get new updates</p>
        <br></br>
          <div className="social-icons-container">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;