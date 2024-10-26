import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { BsEnvelopeFill } from "react-icons/bs";
import { FcOk } from "react-icons/fc";
import "./ContactForm.css";

const ContactForm = () => {
  const [sendForm, setSendForm] = useState(false);
  const handleWatcher = () => {
    setSendForm(true);
  };
  const handleCloser = () => {
    setSendForm(false);
  };

  return (
    <>
      <div id="ContactForm">
        <div className="container">
          <div className="contactForm_left">
            <div className="contact-form">
              <div className="form-title">
                <h4>Get In Touch</h4>
              </div>

              <form>
                <div className="form-content">
                  <div className="input-group">
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="input-group">
                    <input type="email" placeholder="Email Addres" />
                  </div>
                  <div className="input-group">
                    <input type="number" placeholder="Phone number" />
                  </div>
                  <div className="input-group">
                    <textarea rows="4" placeholder="Message"></textarea>
                  </div>
                  <div className="input-group  btn-pad">
                    <a href="#" onClick={handleWatcher}>
                      Send a Message
                    </a>
                  </div>
                </div>
              </form>
            </div>

            {sendForm && (
              <div className="form-overlays">
                <form className="sendContent">
                  <div className="succes-icon">
                    <FcOk />
                  </div>

                  <h3>Success!</h3>
                  <p>Your action has been complated</p>

                  <a href="/contacts" onClick={handleCloser}>
                    Ok
                  </a>
                </form>
              </div>
            )}
          </div>

          <div className="contactForm_right">
            <div className="contact-info-content">
              <div className="form-info">
                <h5>Information</h5>
              </div>
              <p className="info-text">
                <span>Find solutions :</span>
                to common problems, or get help from a support agent industry's
                standard .
              </p>

              <div className="content-list">
                <ul>
                  <li>
                    <div className="content-icon">
                      <IoLocationSharp />
                    </div>
                    <p>
                      <span>Address :</span>88c Park road in Las Vegas
                    </p>
                  </li>

                  <li>
                    <div className="content-icon">
                      <MdCall />
                    </div>
                    <p>
                      <span> Phone :</span> (+995) 173 854 999
                    </p>
                  </li>

                  <li>
                    <div className="content-icon">
                      <BsEnvelopeFill />
                    </div>
                    <p>
                      <span>Email :</span> support@movie-center.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
