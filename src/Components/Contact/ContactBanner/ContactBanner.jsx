import React from "react";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <div id="ContactBanner">
      <div className="container">
        <div className="contactBanner-content">
          <h2>Contact</h2>
          <p>
            <a href="/home">Home</a> / Contact
          </p>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default ContactBanner;
