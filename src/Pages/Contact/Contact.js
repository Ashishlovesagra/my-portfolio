import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import "./style.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact-mainbox">
        <div className="contactbox">
          <p className="contact-title">
            <span className="Contact-logo first-logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9195/9195168.png"
                alt=""
                width="70px"
              />
            </span>
            <span className="contact-name">Contact Information</span>
          </p>
          <p className="email">
            <span className="Contact-logo second-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="" width='40px' />
            </span>
            <span className="contact-email">Ashishlovesagra@gmail.com</span>
          </p>
          <p className="whatsapp">
            <span className="Contact-logo second-logo">
                <img className="whatImg" src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="" />
                </span> <span className="contact-whats">+91 9911568866</span>
          </p>
          <p className="phone">
            <span className="Contact-logo second-logo">
                <img className="whatImg" src="https://cdn-icons-png.flaticon.com/512/3059/3059502.png" alt="" />
                </span> <span className="contact-whats">+91 9911568866</span>
          </p>
          <p className="linkedin">
            <span className="Contact-logo second-logo">
                <img className="whatImg" src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="" />
            </span>
            <span className="contact-whats">www.linkedin.com/in/ashish-singh-88a9901a7</span>
            
          </p>
          <p className="insta">
            <span className="Contact-logo second-logo">
                <img className="whatImg" src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" alt="" />
            </span>
            <span className="contact-whats">https://www.instagram.com/singh.ashish1009</span>
          </p>
          <p className="facebook">
            <span className="Contact-logo second-logo">
                <img className="whatImg" src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="" />
            </span>
            <span className="contact-whats">https://github.com/Ashishlovesagra</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
