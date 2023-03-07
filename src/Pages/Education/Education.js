import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import './edu.css';

function Education() {
  return (
    <div>
        <Navbar/>
      <div className="education-mainBox">
        <div className="educat">
            <p className='class'>Graducation</p>
            <p className='schoolname'>Feroze Gandhi Institute Of Engineering And Technology- [FGIET], Rae Bareli UP</p>
            <p className='btach'>Electronics and Communication Engineering (ECE)</p>
            <p className='result'>7.1 CGPA</p>
            <p className='passout'>2022</p>
        </div>
        <div className="educat">
            <p className='class'>Intermediate</p>
            <p className='schoolname'>S G R I C Kurra Chittarpur, Agra UP</p>
            <p className='btach'>UP Board</p>
            <p className='result'>70.4 %</p>
            <p className='passout'>2017</p>
        </div>
        <div className="educat">
            <p className='class'>High School</p>
            <p className='schoolname'>John Milton Public School Nehru Enclave, Agra UP</p>
            <p className='btach'>CBSE Board</p>
            <p className='result'>6.8 CGPA</p>
            <p className='passout'></p>
        </div>
      </div>
    </div>
  )
}

export default Education;
