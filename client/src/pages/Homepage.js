import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Homepage() {
  //background image for homepage
  const myStyle = {
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/images/backgroundImage.jpeg"
    })`,
    height: "100vh",
    //prob dont need, clean up later if not used
    //marginTop: "-6.5%", //update this size to whatever size the header is set to and figure out how to make mobile responsive;  or maybe change the margin of the header and put this top margin at 0 --fixed i think
    // fontSize: "50px",
    marginTop: "-50px",
    zIndex: "-1",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="homepageDiv" style={myStyle}>
      <div className="logoDiv">
        <img src={logo} alt="Beyond Eagles' Wings Logo" className="logoImg" />
      </div>
      <div className="homepageContent">
        <button className="learnMoreBtn">
          <Link
            to="/info"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "22px",
            }}
          >
            Learn More...
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Homepage;
