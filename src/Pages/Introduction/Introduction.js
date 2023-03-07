import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import './intro.css';

function Introduction() {
  return (
    <div>
        <Navbar/>
      <div className="introduction-mainBox">
      <h2>About me</h2>
        <p>My name is Ashish Kumar Singh and I have completed my Bachelor of Technology [B.Tech] in Electronics and Communication Engineering (ECE) with an overall CGPA of 7.1 from Feroze Gandhi Institute Of Engineering And Technology- [FGIET], Rae Bareli. <br/> I have a good knowledge of Java, HTML, CSS, Javascript,React.js,GitHub and MongoDb. <br/> Currently, I am also working to improve my Backend Development Skills. <br/>
        Along with technical skills, I have good communication skills that I feel are necessary to accomplish daily responsibilities effectively. <br/> I also have internship experience at Prepbytes and gained real-world skills. <br/>Coming to my other interest, I love playing Football and have played many tournaments. I believe, it helps me relieve stress and stay focused.
        </p>
        <h2>My Skills</h2>
        <div className="skillcontainer">
            <div className="skillItem">Java: &nbsp;&nbsp;&nbsp; <div className="fifty"></div></div>
            <div className="skillItem">HTML: &nbsp;&nbsp;&nbsp; <div className="skill"></div></div>
            <div className="skillItem">CSS: &nbsp;&nbsp;&nbsp; <div className="skill"></div></div>
            <div className="skillItem">JavaScript: &nbsp;&nbsp;&nbsp; <div className="skill"></div></div>
            <div className="skillItem">React.js: &nbsp;&nbsp;&nbsp;<div className="skill"></div></div>
            <div className="skillItem">GITHub: &nbsp;&nbsp;&nbsp;<div className="skill"></div></div>
            <div className="skillItem">MongoDb: &nbsp;&nbsp;&nbsp;<div className="skill"></div></div>
        </div>
      </div>
    </div>
  )
}

export default Introduction;
