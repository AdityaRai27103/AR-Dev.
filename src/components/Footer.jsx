import React from 'react';
import logo from '../assets/logo-white.svg';
import footer_icon1 from '../assets/youtube.svg';
import footer_icon2 from '../assets/webflow.svg';
import footer_icon3 from '../assets/upwork.svg';
import footer_icon4 from '../assets/shopify.svg';
import bgshape4 from '../assets/bg-shape-4.svg'


const Footer = () => {
  return (
    <footer className="footer-area">
            <img src={bgshape4} alt="Shape" className="animation-slide-right bg-shape" />
            <div className="footer-top">
                <div className="custom-container">
                    <div className="custom-row align-items-end justify-content-between">
                        <div className="left-content">
                            <a href="index.html" class="logo">
                                <img src={logo} alt="Logo" />
                            </a>
                            <p>We provide the expertise and support to <br/>
                                propel your business forward.</p>
                            <form action="https://wpriverthemes.com/HTML/synck/assets/mail/subscribe.php" method="POST" className="subscribe-form">
                                <div className="subscribe-box d-flex">
                                    <input type="email" id="email" name="email" placeholder="Enter Your Email" />
                                    <button id="submit2" className="theme-btn">Get Started</button>
                                </div>
                                 
                                <div className="input-row">
                                    <div className="input-group alert-notification">
                                        <div id="alert-message-subscribe" className="alert-msg"></div>
                                    </div>
                                </div>
                            </form>
                            <div className="footer-clients d-flex align-items-center">
                                <div className="footer-client-img">
                                    <img src={footer_icon1} alt="Youtube" />
                                </div>
                                <div className="footer-client-img">
                                    <img src={footer_icon2} alt="webflow" />
                                </div>
                                <div className="footer-client-img">
                                    <img src={footer_icon3} alt="upwork" />
                                </div>
                                <div className="footer-client-img">
                                    <img src={footer_icon4} alt="shopify" />
                                </div>
                            </div>
                        </div>

                        <div className="right-content">
                            <div className="right-content-inner">
                                <h2>Let’s get started on something great</h2>
                                <p>Our team of IT experts looks forward to meeting with you <br/>
                                    and providing valuable insights tailored to your business.</p>
                                <a href="contact.html" class="theme-btn">Get an appointment now</a>

                                <div className="footer-experience d-flex align-items-center">

                                    <div className="footer-experience-item">
                                        <h1>2 <span>Mins</span></h1>
                                        <p>Response Time</p>
                                    </div>
                                    <div className="footer-experience-item">
                                        <h1>99%</h1>
                                        <p>Client Satisfaction</p>
                                    </div>
                                    <div className="footer-experience-item">
                                        <h1>22+ <span>Years</span></h1>
                                        <p>Field Experience</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="custom-container">
                    <div className="custom-row">
                        <div className="footer-all-links-wrap justify-content-between d-flex">
                            <div className="footer-links">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="service-details.html">IT Support</a></li>
                                    <li><a href="service-details.html">Web Design</a></li>
                                    <li><a href="service-details.html">Development</a></li>
                                    <li><a href="service-details.html">Cloud Things <span className="new">New</span></a></li>
                                    <li><a href="service-details.html">E-Commerce</a></li>
                                    <li><a href="service-details.html">CRM Solutions</a></li>
                                </ul>
                            </div>
                            <div className="footer-links">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="partner.html">Partners</a></li>
                                    <li><a href="career.html">Careers</a></li>
                                    <li><a href="event.html">Events</a></li>
                                    <li><a href="team.html">Team</a></li>
                                </ul>
                            </div>
                            <div className="footer-links">
                                <h3>Product</h3>
                                <ul>
                                    <li><a href="case-studie.html">Case Studies </a></li>
                                    <li><a href="pricing.html">Our Pricing</a></li>
                                    <li><a href="feature.html">Features</a></li>
                                    <li><a href="overview.html">Overview</a></li>
                                    <li><a href="new-release.html">New Releases</a></li>
                                    <li><a href="solution.html">Solutions</a></li>
                                </ul>
                            </div>
                            <div className="footer-links">
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
                            <div className="footer-links">
                                <h3>Legal</h3>
                                <ul>
                                    <li><a href="/">Licenses</a></li>
                                    <li><a href="/">Settings</a></li>
                                    <li><a href="/">Cookies</a></li>
                                    <li><a href="/">Document</a></li>
                                    <li><a href="/">Terms</a></li>
                                    <li><a href="/">Privacy</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="footer-contact-info">
                            <div className="footer-contact-info-item">
                                <h4>Phone</h4>
                                <p>
                                    <a href="tel:+91-9981319158">+91-9981319158</a> <br/>
                                    {/* <a href="tel:+91-9981319158">+91-9981319158</a> */}
                                </p>
                            </div>
                            <div className="footer-contact-info-item">
                                <h4>Mail</h4>
                                <p>
                                    <a href="mailto:adityarai27103@gmail.com">adityarai27103@gmail.com</a> <br/>
                                    {/* <a href="mailto:2021csaditya9292@poornima.edu.in">2021csaditya9292@poornima.edu.in</a> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="custom-container">
                    <div className="custom-row d-flex align-items-center justify-content-between">
                        <ul className="social-links d-flex align-items-center">
                            <li><a href="#">
                                <i class="iconoir-dribbble"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-twitter"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-instagram"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-linkedin"></i>
                            </a></li>
                        </ul>

                        <p>&copy; 2024 All rights reserved by <a href="https://www.linkedin.com/in/aditya-rai-556227220?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3Bm3LYiNE9TDK3nNWJLgxgYw%3D%3D">Aditya Rai</a></p>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
