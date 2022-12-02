import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <i className="fa fa-envelope"></i>cward@beyondeagleswings.com
      </div>
      <div className="contact">
        <i className="fa fa-phone"></i>770-598-9675
      </div>
      <div className="contact">
        <a
          href="https://www.facebook.com/beyondeagleswings"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>Facebook Page
        </a>
      </div>
    </div>
  );
}

export default Footer;
