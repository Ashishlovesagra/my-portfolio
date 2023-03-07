import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Certificate from '../Pages/Certificate/Certificate';
import Contact from '../Pages/Contact/Contact';
import Education from '../Pages/Education/Education';
import Home from '../Pages/Home/Home';
import Introduction from '../Pages/Introduction/Introduction';
import Project from '../Pages/Project/Project';

function Rout() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/about' element={<Introduction/>}/>
          <Route path='/certificte' element={<Certificate/>}/>
          <Route path='/projects' element={<Project/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rout;
