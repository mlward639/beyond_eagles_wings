import React from "react";
import { Outlet } from "react-router-dom";

function ServicesPage() {
  // const myStyle = {
  //   backgroundImage: `url(${
  //     process.env.PUBLIC_URL + "/images/footprints9.jpg"
  //   })`,
  //   height: "100vh",
  //   //marginTop: "-6.5%", //update this size to whatever size the header is set to and figure out how to make mobile responsive;  or maybe change the margin of the header and put this top margin at 0 --fixed i think
  //   // fontSize: "50px",
  //   marginTop: "-60px",
  //   zIndex: "-1",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };

  //maybe make all service comps the same style with a class name for all making styling uniform

  return (
    //<div style={myStyle} className="servicesDiv">
    <div className="servicesDiv">
      <Outlet />
    </div>
  );
}

export default ServicesPage;
