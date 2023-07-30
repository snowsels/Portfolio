import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Testimonial.css';

import shape from '../../../src/img/Testimonial/shape-bg.png';


export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      };
    

  return (
    <div>
      <ScreenHeading
        title={"Extracurricular Activities"}
        subHeading={"What have I done during college?"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel"{...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <i className="fa fa-quote-left" />

                      As an active member of Management Club at Galgotias College of Engineering 
                      and Technology , I have
                      sucessfully managed and participated in the diwali events, club promotions and
                      registrations, fresher auditions and farewell
                      events. 
                      <i className="fa fa-quote-right" />
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <i className="fa fa-quote-left" />

                      As a member of Rotract Club of GEI I have participated in
                      many donation drives for unpriviledged children,
                      volunteered in blood donation camps held at the college
                      campus and raised support for UDAAN, a sanitary pad
                      distribution drive for deprived women.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    <i className="fa fa-quote-left" />
                      I was an anchor at Fusion Society of department of Infomation Technology at
                      Galgotias College of Engineering and Technology(Editorial Board) and has played a part in organizing the dussehra and
                      the annual deparmental fest AAGAZ 2022.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
