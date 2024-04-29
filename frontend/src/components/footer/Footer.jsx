import React from "react";
import "./Footer.css";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import pinterest from "../assets/pinterest.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={facebook} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={tiktok} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={youtube} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>© OUTDOOR & CAMPING 2024</p>
      </div>
    </div>
  );
};

export default Footer;
