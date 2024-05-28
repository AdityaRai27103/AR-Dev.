import React from 'react'
import iphone from '../assets/iphone-13-1.jpg'
import portfolio1 from '../assets/portfolio-mega-menu-1.jpg'
import portfolio2 from '../assets/portfolio-mega-menu-2.jpg'
import portfolio3 from '../assets/portfolio-mega-menu-3.jpg'
import portfolio4 from '../assets/portfolio-mega-menu-4.jpg'
import ipad from '../assets/macbook.jpg'
import hwdicon1 from '../assets/hwd-icon-1.svg'
import hwdicon2 from '../assets/hwd-icon-2.svg'
import hwdicon3 from '../assets/hwd-icon-3.svg'
import hwdicon4 from '../assets/hwd-icon-4.svg'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <header className="header-area">

    <div className="custom-container">
        <div className="custom-row align-items-center justify-content-between">
            <div className="header-left d-flex align-items-center">
                <a href="/" className="logo">
                    <img src={logo} alt="Logo" />
                </a>

                <div className="header-left-right">
                    <a href="/Contact" className="theme-btn">Contact Us</a>
                    <span className="menu-bar">
                        <i className="las la-bars"></i>
                    </span>
                </div>
                <nav className="navbar-wrapper">
                    <span className="close-menu-bar">
                        <i className="las la-times"></i>
                    </span>
                    <ul>
                        <li className="dropdown-menu-item">
                            <a href="/">Home</a>
                            <span className="dropdown-menu-item-icon">
                                <i className="las la-angle-down"></i>
                            </span>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="/">IT Services</a>
                                </li>
                                <li>
                                    <a href="/Home2">Business Consulting</a>
                                </li>
                            </ul>
                        </li>
                        <li className="mega-menu-item">
                            <a href="/Company">Company</a>
                            <span className="dropdown-menu-item-icon">
                                <i class="las la-angle-down"></i>
                            </span>
                            <div className="mega-menu mega-menu-company">
                                <div className="mega-menu-inner">
                                    <div className="custom-container d-flex">
                                        <div className="left">
                                            <div className="mega-menu-link-wrap d-flex justify-content-between">
                                                <div className="mega-menu-link">
                                                    <h3>Get Started</h3>
                                                    <ul>
                                                        <li><a href="#">Setup 101</a></li>
                                                        <li><a href="#">Adding users</a></li>
                                                        <li><a href="#">Video tutorials</a></li>
                                                        <li><a href="#">Libraries and SDKs</a></li>
                                                        <li><a href="#">Plugins</a></li>
                                                        <li><a href="#">Templates</a></li>
                                                    </ul>
                                                </div>

                                                <div className="mega-menu-links d-flex">
                                                    <div className="mega-menu-link">
                                                        <h3>Company</h3>
                                                        <ul>
                                                            <li><a href="about.html">About Us</a></li>
                                                            <li><a href="partner.html">Partners</a></li>
                                                            <li><a href="career.html">Careers</a></li>
                                                            <li><a href="event.html">Events</a></li>
                                                            <li><a href="team.html">Team</a></li>
                                                             <li><a href="blog.html">Blog</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-link">
                                                        <h3>Product</h3>
                                                        <ul>
                                                            <li><a href="overview.html">Overview</a></li>
                                                            <li><a href="pricing.html">Pricing</a></li>
                                                            <li><a href="feature.html">Features</a></li>
                                                            <li><a href="case-studie.html">Case Studies</a></li>
                                                            <li><a href="new-release.html">New Releases</a></li>
                                                            <li><a href="solution.html">Solutions</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-link">
                                                        <h3>Legal</h3>
                                                        <ul>
                                                            <li><a href="#">Licenses</a></li>
                                                            <li><a href="#">Settings</a></li>
                                                            <li><a href="#">Cookies</a></li>
                                                            <li><a href="#">Document</a></li>
                                                            <li><a href="#">Terms</a></li>
                                                            <li><a href="#">Privacy</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                <ul className="mega-menu-social d-flex align-items-center">
                                                    <li><a href="#"><i class="iconoir-dribbble"></i></a></li>
                                                    <li><a href="#"><i class="iconoir-twitter"></i></a></li>
                                                    <li><a href="#"><i class="iconoir-instagram"></i></a></li>
                                                    <li><a href="#"><i class="iconoir-linkedin"></i></a></li>
                                                </ul>

                                                <p>Looking for new career? <a href="career.html">We're hiring</a></p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="mega-menu-ads">
                                                <img src={iphone} alt="Iphone" />
                                                <h2>Solution in your hand</h2>
                                                <p>Develop IT solutions based on the<br/> analysis phase.</p>
                                                <a href="case-studie-single.html">View more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mega-menu-item">
                            <a href="portfolio.html">Portfolio</a>
                            <span className="dropdown-menu-item-icon">
                                <i class="las la-angle-down"></i>
                            </span>
                            <div className="mega-menu mega-menu-portfolio">
                                <div className="mega-menu-inner">
                                    <div className="custom-container d-flex">
                                        <div className="left">
                                            <div
                                                className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                                <div className="mega-menu-portfolio-card">
                                                    <div className="img-box">
                                                        <img src={portfolio1}
                                                            alt="Portfolio" />
                                                    </div>
                                                    <div className="content-box">
                                                        <h3><a href="portfolio-details.html">E-commerce</a></h3>
                                                        <p>we undertook a project to <br/>migrate their existing.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mega-menu-portfolio-card">
                                                    <div className="img-box">
                                                        <img src={portfolio2}
                                                            alt="Portfolio" />
                                                    </div>
                                                    <div className="content-box">
                                                        <h3><a href="portfolio-details.html">App Development</a></h3>
                                                        <p>The mobile application has <br/>significantly
                                                            improved.</p>
                                                    </div>
                                                </div>
                                                <div className="mega-menu-portfolio-card">
                                                    <div className="img-box">
                                                        <img src={portfolio3}
                                                            alt="Portfolio" />
                                                    </div>
                                                    <div className="content-box">
                                                        <h3><a href="portfolio-details.html">SAAS Integration</a></h3>
                                                        <p>We partnered with DEF to <br/>upgrade their outdated
                                                            IT.</p>
                                                    </div>
                                                </div>
                                                <div className="mega-menu-portfolio-card">
                                                    <div className="img-box">
                                                        <img src={portfolio4}
                                                            alt="Portfolio" />
                                                    </div>
                                                    <div className="content-box">
                                                        <h3><a href="portfolio-details.html">Virtual Reality</a></h3>
                                                        <p>Enter into the virtual reality <br/>
                                                            world for real experience.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div
                                                className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                <ul className="mega-menu-social d-flex align-items-center">
                                                    <li><a href="#"><i class="iconoir-dribbble"></i></a></li>
                                                    <li><a href="#"><i class="iconoir-twitter"></i></a></li>
                                                    <li><a href="#"><i class="iconoir-instagram"></i></a></li>
                                                    <li><a href="#"><i class="iconoir-linkedin"></i></a></li>
                                                </ul>

                                                <p><a href="portfolio.html">View Portfolio <i
                                                            class="iconoir-arrow-up-right"></i></a></p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="mega-menu-ads">
                                                <img src={ipad} alt="iPad" />
                                                <h2>Mobile app for a new era</h2>
                                                <p>Download slack in your mobile for <br/>
                                                    your daily usage.</p>
                                                <a href="case-studie-single.html">View more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                       <li className="mega-menu-item">
                            <a href="service.html">Services</a>
                            <span className="dropdown-menu-item-icon">
                                <i class="las la-angle-down"></i>
                            </span>
                            <div className="mega-menu">
                                <div className="mega-menu-inner">
                                    <div className="custom-container d-flex">
                                        <div className="left">
                                            <div
                                                className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                                <div className="mega-menu-service-cards align-items-start">
                                                    <div className="mega-menu-service-card">
                                                        <span className="icon">
                                                            <img src={hwdicon1}
                                                                alt="Service" />
                                                        </span>
                                                        <div className="content">
                                                            <h2><a href="how-we-do-single.html">Brainstroming</a></h2>
                                                            <p>Ideas</p>
                                                        </div>
                                                    </div>
                                                    <div className="mega-menu-service-card">
                                                        <span className="icon">
                                                            <img src={hwdicon4}
                                                                alt="Service" />
                                                        </span>
                                                        <div className="content">
                                                             <h2><a href="how-we-do-single.html">Product</a></h2>
                                                            <p>Design</p>
                                                        </div>
                                                    </div>
                                                    <div className="mega-menu-service-card">
                                                        <span className="icon">
                                                            <img src={hwdicon2}
                                                                alt="Service" />
                                                        </span>
                                                        <div className="content">
                                                             <h2><a href="how-we-do-single.html">SEO</a></h2>
                                                            <p>Optimization</p>
                                                        </div>
                                                    </div>
                                                    <div className="mega-menu-service-card">
                                                        <span className="icon">
                                                            <img src={hwdicon3}
                                                                alt="Service" />
                                                        </span>
                                                        <div className="content">
                                                             <h2><a href="how-we-do-single.html">Front-End</a></h2>
                                                            <p>Development</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mega-menu-links d-flex">
                                                    <div className="mega-menu-link">
                                                        <h3>Services</h3>
                                                        <ul>
                                                            <li><a href="service-details.html">Development</a></li>
                                                            <li><a href="service-details.html">Web Design</a></li>
                                                            <li><a href="service-details.html">IT Support</a></li>
                                                            <li><a href="service-details.html">E-Commerce</a></li>
                                                            <li><a href="service-details.html">Cloud Things</a></li>
                                                            <li><a href="service-details.html">CRM Solutions</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu-link">
                                                        <h3>Our Fields</h3>
                                                        <ul>
                                                            <li><a href="our-field-details.html">Healthcare</a></li>
                                                            <li><a href="our-field-details.html">Banks</a></li>
                                                            <li><a href="our-field-details.html">Logistics</a></li>
                                                            <li><a href="our-field-details.html">Supermarkets</a></li>
                                                            <li><a href="our-field-details.html">Industries</a></li>
                                                            <li><a href="our-field-details.html">Hotels</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                <ul className="mega-menu-social d-flex align-items-center">
                                                    <li><a href="#"><i class="iconoir-dribbble"></i></a></li>
                                                    <li><a href="#"><i class="iconoir-twitter"></i></a></li>
                                                    <li><a href="#"><i class="iconoir-instagram"></i></a></li>
                                                    <li><a href="#"><i class="iconoir-linkedin"></i></a></li>
                                                </ul>

                                                <p>Looking for new career? <a href="career.html">We're hiring</a></p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="mega-menu-ads">
                                                <img src={ipad} alt="iPad" />
                                                <h2>Our product hits</h2>
                                                <p>Our new best IT product of the <br/>year 2023.</p>
                                                <a href="case-studie-single.html">View more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="faq.html">FAQ</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-right">
                <div className="header-contact-info d-flex align-items-center">
                    <div className="phone-number">
                        <a href="tel:+91-9981319158">
                            Call Us 
                            <i class="iconoir-arrow-up-right"></i>
                        </a>
                        +91-9981319158
                    </div>
                    <a href="contact.html" className="theme-btn">Contact Us</a>
                </div>
            </div>
        </div>
    </div>

</header>
  )
}

export default Navbar
