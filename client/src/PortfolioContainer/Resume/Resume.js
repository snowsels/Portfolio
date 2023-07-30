import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import './Resume.css';

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Certifications", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "C++", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "SQL", ratingPercentage: 80 },
  ];
  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "May 2023", toDate: "July 2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "A Place Review App",
      duration: { fromDate: "February 2023", toDate: "May 2023" },
      description:
        "A full stack application that collects reviews about different places from a particular user",
      subHeading:
        "Technologies Used:  React, Mongo DB, Express Js, Node Js.",
    },
    {
      title: "Amazon Clone ",
      duration: { fromDate: "September 2022", toDate: " December 2022" },
      description:
        "A clone of the shopping site Amazon",
      subHeading:
        "Technologies Used: Firebase, React Js, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Galgotias College of Engineering and Technology"}
        subHeading={"BACHELOR OF TECHNOLOGY(Information Technology)-7.7 CGPA"}
        fromDate={"2020"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"XII"}
        subHeading={"Army Public School Kunraghat Gorakhpur - 85.6%"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Army Public School Kunraghat Gorakhpur- 10 CGPA"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
     
        <ResumeHeading
          heading={"Mastering Data Structures & Algorithms using C++"}
          subHeading={"Udemy"}
          fromDate={"Nov 2022"}
          toDate={"April 2023"}
        />
        <ResumeHeading
          heading={"The Web Developer Bootcamp 2023"}
          subHeading={"Udemy"}
          fromDate={"May 2023"}
          toDate={"June 2023"}
        />
        <ResumeHeading
          heading={"MERN Stack"}
          subHeading={"NIELIT"}
          fromDate={"June 2023"}
          toDate={"July 2023"}
        />
       
        </div>,
         <div
         className="resume-screen-container programming-skills-container"
         key="programming-skills"
       >
         {programmingSkillsDetails.map((skill, index) => (
           <div className="skill-parent" key={index}>
             <div className="heading-bullet"></div>
             <span>{skill.skill}</span>
             <div className="skill-percentage">
               <div
                 style={{ width: skill.ratingPercentage + "%" }}
                 className="active-percentage-bar"
               ></div>
             </div>
           </div>
         ))}
       </div>,
        <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>,
      <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Cooking"
        description="Apart from being a tech enthusiast and a code writer, I also love to cook and feed people"
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's This is Taylor Swift playlist is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Sports"
        description="I like to challenge my reflexes a lot while competing in basketball games and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];
  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };


  return (
    <div
    className="resume-container screen-container fade-in"
    id={props.id || ""}
  >
    <div className="resume-content">
      <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
      <div className="resume-card">
        <div className="resume-bullets">
          <div className="bullet-container">
            <div className="bullet-icons"></div>
            <div className="bullets">{getBullets()}</div>
          </div>
        </div>

        <div className="resume-bullet-details">{getResumeScreens()}</div>
      </div>
    </div>
  </div>
  );
}
