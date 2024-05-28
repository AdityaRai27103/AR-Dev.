import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../assets/client-logo1.svg";
import client2 from "../assets/client-logo2.svg";
import client3 from "../assets/client-logo3.svg";
import client4 from "../assets/client-logo4.svg";
import client5 from "../assets/client-logo5.svg";

export default function Sliders() {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000, // Adjust the speed as needed
    pauseOnFocus: false,
    pauseOnHover: false,
    // cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
    cssEase: "Linear",
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };
  return (

    // <section className="client-area">
    //     <div className="clients clients-marquee d-flex align-items-center">

    //       {/* <div className="client-logo" style="min-width: 0;"></div> */}
    //     </div>
    //   </section>
    <section className="client-area">
      <div className="clients clients-marquee">
        <Slider {...settings}>
          <div className="client-logo">
            <img src={client1} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client2} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client3} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client4} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client5} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client1} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client2} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client3} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client4} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client5} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client1} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client2} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client3} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client4} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client5} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client1} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client2} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client3} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client4} alt="Client" />
          </div>
          <div className="client-logo">
            <img src={client5} alt="Client" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </section>
  );
}
