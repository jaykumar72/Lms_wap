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
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" onClick={handleDropdownToggle}>
                  Upcoming Events
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Certifications</a></li>
                  <li><a href="#">Workshops</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" onClick={handleDropdownToggle}>
                      Free events
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Event 1</a></li>
                      <li><a href="#">Event 2</a></li>
                    </ul>
                  </li>
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
                <a href="/" className="dropdown-toggle" onClick={handleDropdownToggle}>
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Dropdown Item 1</a></li>
                  <li><a href="#">Dropdown Item 2</a></li>
                  <li><a href="#">Dropdown Item 3</a></li>
                </ul>
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
              <li>
                <a href="index.html#contact">Login</a>
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
/* Header Styles */
.header {
  color: white;
  background-color: rgb(0, 0, 0);
  padding: 8px 0;
  transition: all 0.5s;
  z-index: 997;
}

.contact-number {
  margin-top: 3px;
  position: absolute;
  top: 0;
  right: 30px;
  color: white;
  font-size: 16px;
  z-index: 1000;
}

.sitename {
  text-decoration: none;
  width: 100px; /* Adjust the width as needed */
  height: auto; /* Automatically adjust the height to maintain aspect ratio */
}

.header .logo {
  line-height: 1;
}

.header .logo img {
  max-height: 36px;
  margin-right: 8px;
}

.header .logo h1 {
  font-size: 30px;
  margin: 0;
  font-weight: 700;
  color: var(--heading-color);
}
@media (max-width: 480px) {
  .contact-number {
    display: block;
  }

  .header .logo img {
    max-height: 24px;
  }

  .header .logo h1 {
    font-size: 24px;
  }
}

/* Button Styles */
/* Button Styles */
.header .btn-getstarted,
.header .btn-getstarted:focus {
  color: var(--contrast-color);
  background: var(--accent-color);
  font-size: 14px;
  padding: 8px 25px;
  margin: 0 0 0 30px;
  border-radius: 50px;
  transition: 0.3s;
}

.header .btn-getstarted:hover,
.header .btn-getstarted:focus:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 15%);
}
/* Navigation Menu Styles */
/* Navigation Menu Styles */
/* Navigation Menu Styles */
.navmenu {
  padding: 0;
}

.navmenu ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navmenu li {
  position: relative;
}

.navmenu a,
.navmenu a:focus {
  color: var(--nav-color);
  padding: 0 .7rem;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  transition: 0.3s;
  text-decoration: none;
}

.navmenu a i,
.navmenu a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
  transition: 0.3s;
}

.navmenu li:last-child a {
  padding-right: 0;
}

.navmenu li:hover>a,
.navmenu .active,
.navmenu .active:focus {
  color: var(--nav-hover-color);
}

.navmenu .dropdown ul {
  margin: 0;
  padding: 10px 0;
  color: black;
  background: white;
  display: block;
  position: absolute;
  visibility: hidden;
  left: 0;
  top: 100%;
  opacity: 0;
  transition: 0.3s;
  border-radius: 4px;
  z-index: 99;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
}

.navmenu .dropdown ul li {
  min-width: 200px;
}

.navmenu .dropdown ul a {
  padding: 10px 20px;
  font-size: 14px;
  text-transform: none;
  font-weight: 400;
  color: var(--dropdown-color);
}

.navmenu .dropdown ul a:hover,
.navmenu .dropdown ul .active {
  color: var(--dropdown-hover-color);
}

.navmenu .dropdown:hover>ul {
  top: calc(100% + 30px);
  opacity: 1;
  visibility: visible;
}

.navmenu .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}

.navmenu .dropdown .dropdown:hover>ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

.navmenu .dropdown .dropdown ul a {
  padding: 10px 20px;
}

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active .navmenu {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9997;
  overflow-y: auto;
  transition: 0.3s;
}

.mobile-nav-active .navmenu ul {
  display: block;
  text-align: center;
  padding-top: 50px;
}

.mobile-nav-active .navmenu ul a {
  padding: 10px 20px;
  font-size: 20px;
  display: block;
}

.mobile-nav-active .navmenu .dropdown ul {
  position: static;
  display: none;
  padding: 10px 0;
  margin: 10px 0;
  transition: 0.3s;
  opacity: 1;
  visibility: visible;
}

.mobile-nav-active .navmenu .dropdown .dropdown ul {
  padding-left: 30px;
}

.mobile-nav-active .navmenu .dropdown .dropdown:hover>ul {
  top: 0;
  left: 100%;
  opacity: 1;
  visibility: visible;
}

.mobile-nav-active .mobile-nav-toggle {
  position: fixed;
  right: 20px;
  top: 20px;
}

.mobile-nav-toggle {
  cursor: pointer;
  font-size: 24px;
  line-height: 0;
  margin-left: auto;
  color: var(--nav-color);
  transition: 0.3s;
}

.mobile-nav-toggle i {
  color: var(--nav-color);
}

/* Mobile Navigation */
@media (max-width: 1199px) {
  .mobile-nav-hide {
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    line-height: 0;
    transition: 0.5s;
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 9999;
    display: none; /* Initially hide the close icon */
  }
  .mobile-nav-toggle {
    color: var(--nav-color);
    font-size: 28px;
    line-height: 0;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .navmenu {
    padding: 0;
    z-index: 9997;
  }

  .navmenu ul {
    display: none;
    position: absolute;
    inset: 60px 20px 20px 20px;
    padding: 10px 0;
    margin: 0;
    border-radius: 6px;
    background-color: black;
    overflow-y: auto;
    transition: 0.3s;
    z-index: 9998;
    box-shadow: 0px 0px 30px color-mix(in srgb, black, );
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-dropdown-color);
    padding: 10px 20px;
    font-size: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.3s;
    background-color: color-mix(in srgb, var(--accent-color), transparent 90%);
  }

  .navmenu a i:hover,
  .navmenu a:focus i:hover {
    background-color: var(--accent-color);
    color: var(--contrast-color);
  }

  .navmenu a:hover,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .active i,
  .navmenu .active:focus i {
    background-color: var(--accent-color);
    color: var(--contrast-color);
    transform: rotate(180deg);
  }

  .navmenu .dropdown ul {
    position: static;
    display: none;
    z-index: 99;
    padding: 10px 0;
    margin: 10px 20px;
    background-color: var(--nav-dropdown-background-color);
    border: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
    transition: all 0.5s ease-in-out;
    box-shadow: none;
  }

  .navmenu .dropdown ul ul {
    background-color: rgba(33, 37, 41, 0.1);
  }

  .navmenu .dropdown>.dropdown-active {
    display: block;
    background-color: rgba(33, 37, 41, 0.03);
  }

  /* Show the navigation menu when the mobile-nav-active class is present */
  .mobile-nav-active .navmenu {
    display: block;
    position: fixed;
    overflow: hidden;
    inset: 0;
    transition: 0.3s;
    background-color: black;
  }

  .mobile-nav-active .mobile-nav-toggle {
    color: #fff;
    position: absolute;
    font-size: 32px;
    top: 15px;
    right: 15px;
    margin-right: 0;
    z-index: 9999;
  }

  .mobile-nav-active .navmenu>ul {
    display: block;
  }
}

.social-menu {
  margin-top: 3px;
  display: flex;
  justify-content: center;
}

.social-btn {
  list-style: none;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 30%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  z-index: 10px;
}

.social-btn a {
  text-decoration: none;
  color: #fff;
}

.social-btn:hover a {
  color: #fff;
}

.social-btn:hover::after {
  opacity: 1;
}

.facebook a {
  color: #3b5999;
}

.facebook:hover,
.facebook:hover .social-btn:before,
.facebook:hover .social-btn:after {
  background: #3b5999;
}

.instagram a {
  color: #962fbf;
}

.instagram:hover,
.instagram:hover .social-btn:before,
.instagram:hover .social-btn:after {
  background: #ea5198;
}

.twitter a {
  color: #388ae1;
}

.twitter:hover,
.twitter:hover .social-btn:before,
.twitter:hover .social-btn:after {
  background: #388ae1;
}

.linkedin a {
  color: #0072b1;
}

.linkedin:hover,
.linkedin:hover .social-btn:before,
.linkedin:hover .social-btn:after {
  background: #0072b1;
}

.facebook a {
  color: #0072b1;
}

.facebook:hover,
.facebook:hover .social-btn:before,
.facebook:hover .social-btn:after {
  background: #0072b1;
}

/* CSS for Mobile View */
@media (max-width: 768px) {
  .navmenu,
  .contact-number,
  .social-menu {
    display: none;
  }
}


/* Mobile Navigation Styles */
@media (max-width: 991px) {
  .header {
    padding: 15px 0;
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .navmenu {
    position: fixed;
    top: 60px;
    right: -100%;
    width: 300px;
    bottom: 0;
    background: var(--default-color);
    transition: 0.3s;
    z-index: 999;
  }

  .navmenu ul {
    display: block;
    position: absolute;
    top: 60px;
    right: 15px;
    left: 15px;
    bottom: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 30px;
  }

  .navmenu a {
    padding: 10px 20px;
    font-size: 15px;
    color: rgb(0, 0, 0);
    background-color: #fff;
  }

  .navmenu .dropdown ul {
    position: static;
    display: none;
    margin: 10px 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 1;
    visibility: visible;
    background: var(--background-color);
    box-shadow: none;
  }

  .navmenu .dropdown .dropdown-active>ul {
    display: block;
  }

  .mobile-nav-active .navmenu {
    right: 0;
  }

  .mobile-nav-active .navmenu .dropdown-active>ul {
    display: block;
  }
}


@media (min-width: 1024px) {
  .mobile-nav-toggle {
    display: none;
  }
}


.