import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import "./Header.css";

function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };

  const handleDropdownToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const parentLi = event.target.closest("li.dropdown");
    if (parentLi) {
      parentLi.classList.toggle("dropdown-active");
    }
  };

  return (
    <div id="header">
      <header
        className={`header d-flex align-items-center fixed-top ${isMobileNavActive ? "mobile-nav-active" : ""}`}
      >
        <div className="contact-number mb-4">
          <ul className="social-menu">
            <li className="social-btn facebook" tooltip="facebook">
              <a href="/">
                <i className="ri-facebook-line"></i>
              </a>
            </li>
            <li className="social-btn twitter" tooltip="Twitter">
              <a href="/">
                <i className="ri-twitter-line"></i>
              </a>
            </li>
            <li className="social-btn instagram" tooltip="Instagram">
              <a href="/">
                <i className="ri-instagram-line"></i>
              </a>
            </li>
            <li className="social-btn linkedin" tooltip="LinkedIn">
              <a href="/">
                <i className="ri-linkedin-fill"></i>
              </a>
            </li>
            Contact : +91 9731601397, +91 9986004269
          </ul>
        </div>
        <div className="container-fluid container-xl position-relative d-flex align-items-center mt-4">
          <a href="index.html" className="logo d-flex align-items-center me-auto">
            <h1 className="sitename">Neucode</h1>
          </a>
          <nav id="navmenu" className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
            <ul>
              <li className="dropdown">
                <a href="/" className="dropdown-toggle" onClick={handleDropdownToggle}>
                  NeuVersity
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Skills to succeed (self-paced)</a></li>
                  <li><a href="#">Free Resources</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" onClick={handleDropdownToggle}>
                    Free Resources
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Blog</a></li>
                      <li><a href="#"> Vlog</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" onClick={handleDropdownToggle}>
                  Upcoming Events
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Certifications</a></li>
                  <li><a href="#">Workshops</a></li>
                  <li><a href="#">     Free events</a></li>
                  
                  <li><a href="#">De'Talks</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/" className="dropdown-toggle" onClick={handleDropdownToggle}>
                  Self Help Products
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Cards</a></li>
                  <li><a href="#">Books</a></li>
                  <li><a href="#">Trainer toolkits</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/"  >
                  About Us
                </a>
                
              </li>
              <li className="dropdown">
                <a href="/" className="dropdown-toggle" onClick={handleDropdownToggle}>
                  Contact Us
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Call Us</a></li>
                  <li><a href="#">Schedule a meeting</a></li>
                  <li><a href="#">Enquiry</a></li>
                </ul>
              </li>
              <li className="login-hbtn">
                <span href="index.html#contact">Login</span>
              </li>
            </ul>
          </nav>
          <i className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? "bi-x" : "bi-list"}`} onClick={toggleMobileNav}>
            {isMobileNavActive ? <RxCross2 /> : <FaList />}
          </i>
        </div>
      </header>
    </div>
  );
}

export default Header;
