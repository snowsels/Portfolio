import React from "react";
import Typical from "react-typical";
import { UseTypeWriter, Cursor, useTypewriter } from "react-simple-typewriter";
import './Profile.css'
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: [
      "Enthusiastic Dev",
      "Full Stack Developer",
      "MERN Stack Developer",
      "DSA enthusiast",
      "React Developer",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="coltz">
            <div className="coltz-icon">
              <a href="https://www.facebook.com/people/Ankita-Shukla/pfbid0261aN6xM5CoCgaTQ9afB2AAUet5QfW8YkNunqh5QTiPdi1EHb6yrMpXwq9cKVesn8l/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/ankiiitashukla/?igshid=NjIwNzIyMDk2Mg%3D%3D">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/ankita-shukla-22211821b/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Ankita Shukla</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
              I'm a <span>{typeEffect}</span>
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          
          <div className="profile-options">
            <button className="btn primary-btn"
             onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {""}
              Hire me{" "}
            </button>
            <a href="ankitas.pdf" download="ankitas.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
          </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
