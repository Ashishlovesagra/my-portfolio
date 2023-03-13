import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';
import './Home.css';

function Home() {
  return (
    <div>
        <Navbar/>
      <div className="home-container">
      <div className="infoContainer">
            <div className="devInfo">
                <div className="hello">Hi I am </div>
                <div className="name">Ashish Kumar Singh</div>
                <div className="about">Full Stack Web Developer</div>
                <div className="moreabout"></div>
                <div className="buttons">
                    {/* <Link href="../../Utillity/Ashish_singhCv.pdf" target="_blank"><button className="btn">Download CV</button></Link> */}
                    <Link to="/contact"><button className="btn">Contact Me</button></Link>
                </div>
            </div>
            <div className="devPic"></div>
        </div>
      </div>
    </div>
  )
}

export default Home;
