import React from "react";
import img from "../assets/images/chrisPic.JPG";

function AboutMe() {
  return (
    <div className="row aboutDiv">
      <div className="col-7 col aboutInfo">
        <h1 className="aboutTitle">About Me</h1>

        <p>
          I have been serving others in the role of physical therapist for over
          30 years, primarily as a home health therapist. I have been honored to
          accompany many patients on their journey towards end of life, often
          transitioning to hospice care. I have learned over the years that
          every individual has a story, as well as lessons they have learned and
          wish to pass along. I was blessed to be present for my mother, father
          and mother-in-law's transition to their new lives, and I learned that
          each one is as different as the person themselves. In 2019 I felt
          called to the role of end of life doula, took the INELDA
          (International End of Life Doula Association) training course and
          became a volunteer with hospice. I believe the dying process is an
          opportunity to reflect on life, address unresolved issues and create
          the legacy you wish to leave behind.
        </p>
        <p>
          In addition to this passion, I enjoy biking, kayaking, Bible studies
          and spending time with family and friends.
        </p>
      </div>
      <div className="col-3 col bioPicDiv">
        <img src={img} alt="Picture of Chris Ward" className="bioPic" />
      </div>
    </div>
  );
}

export default AboutMe;
