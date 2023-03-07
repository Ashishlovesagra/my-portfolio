import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import "./certi.css";


function Certificate() {
  return (
    <div>
      <Navbar />
      <div className="certi-mainbox">
        <div className="certi-title">Certificate's</div>
        <div className="certificate-box">
          <div className="certi-box">
            <div className="certificate-img">
                
            </div>
            <div className="certificate-title">Frontend Developer By Meta</div>
          </div>
          <div className="certi-box">
            <div className="certificate-img1">   
            </div>
            <div className="certificate-title">Javascript</div>
          </div>
          <div className="certi-box">
            <div className="certificate-img2">   
            </div>
            <div className="certificate-title">ProblemSolving</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
