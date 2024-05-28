import React from 'react'
import empowerment2 from "../assets/bg1.png";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";

const HomeHeroSection = () => {
  return (
    <section className="hero-empowerment-area">
    <div className="custom-container">
        <div className="custom-row align-items-center">
            <div className="hero-empowerment-left-content">
                <h5 className="section-subtitle">EMPOWERMENT</h5>
                <h1 className="section-title fade-in">Seamless IT for your business, boosting your growth.</h1>
                <p>We provide the expertise and support to propel your
                    business forward in the digital landscape.</p>
                <div className="btns-group d-flex">
                    <a href="#" className="theme-btn">Learn More</a>
                    <a href="/Contact" className="theme-btn2">Let's Talk
                        <i class="iconoir-arrow-up-right"></i>
                    </a>
                </div>
            </div>

            <div className="hero-empowerment-right-content">
                <div className="top-content">
                    <img className="desktop fade-in" src={empowerment2} alt="Empowerment" />
                    <img className="mobile" src={empowerment2} alt="Empowerment" />

                    <div className="experience-box simple-shadow bounce-in">
                        <div className="experience-body d-flex align-items-center">
                            <img src={icon1} alt="Icon" />

                            <div className="experience-content d-flex align-items-center">
                                <h1>+8</h1>
                                <p>
                                    Years
                                    <span>Experience</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-content d-flex">
                    <a href="/Team" className="our-expert-team-box simple-shadow bounce-in delay-2">
                        <div className="our-expert-team-box-inner d-flex align-items-center">
                            <div className="imgs imgs1 d-flex align-items-center">
                                <img src={team4} alt="team" />
                                <img src={team3} alt="team" />
                                <img src={team2} alt="team" />
                                <img src={team1} alt="team" />
                            </div>
                            <p>
                                Meet
                                <span>Our Experts</span>
                            </p>
                        </div>
                    </a>

                    <div className="google-reviews-box simple-shadow bounce-in delay-3">
                        <div className="left">
                            <span>Verified by</span>
                            <img src={icon2} alt="Google" />
                        </div>
                        <div className="right">
                            <div className="stars d-flex align-items-center">
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                            </div>
                            <p>
                                3245
                                <span>Reviews</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</section>
  )
}

export default HomeHeroSection
