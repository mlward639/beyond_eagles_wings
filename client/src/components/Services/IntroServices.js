import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navbarItems } from "../../navbarItems";

function IntroServices() {
  return (
    <div className="serviceCompDivs">
      <h1 className="servicesTitle">
        Services of Comfort, Compassion & Celebration
      </h1>
      <p className="servicesDesc">
        I provide a variety of services that can be tailored to meet each
        client's individual needs. Click on a service below to learn more.
      </p>
      <div>
        <ul>
          {" "}
          {navbarItems[2].submenu.map((item, index) => {
            return (
              <li className="servicesList">
                <Link to={item.url} className="servicesLinks">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default IntroServices;
