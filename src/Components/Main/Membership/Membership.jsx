import React from "react";
import "../Membership/Membership.css";

const Membership = () => {
  return (
    <section id="Membership">
      <div className="container">
        <div className="membership-left">
          <h4>Trial Start First 30 Days.</h4>
          <p>Enter your email to create or restart your membership.</p>
        </div>
        <div className="membership-right">
          <form action="#">
            <input type="email" required placeholder="Enter your email" />
            <button className="form-btn">Get Started</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Membership;
