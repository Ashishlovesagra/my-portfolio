import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import './project.css';

function Project() {
  return (
    <div>
        <Navbar/>
      <div className="project-mainbox">
        <div className="projecttitlename">Projects</div>
        <div className="projectBox">
        <div className="project-title">Blog_React-App</div>
        <div className="project-short"><b>Tools Use:-</b> This project is made using Html, CSS and React.js </div>
        <div className="pro-btn">
        <div className="project-repo"><a href="https://github.com/Ashishlovesagra/blog-react-app" 
        target="_blank" rel='noreferrer'><button className='project-btn'>Project RepoLink</button></a></div>
        <div className="project-deploy"><a href="https://thriving-daffodil-acf12a.netlify.app/" target="_blank" rel='noreferrer'><button className='project-btn'>Deploy Link</button></a></div>
        </div>
      </div>
      <div className="projectBox">
        <div className="project-title">Digital Clock</div>
        <div className="project-short"><b>Tools Use:-</b> This project is made using Html, CSS and JavaScript </div>
        <div className="pro-btn">
        <div className="project-repo"><a href="https://github.com/Ashishlovesagra/Projects/tree/main/Project%204" 
        target="_blank" rel='noreferrer'><button className='project-btn'>Project RepoLink</button></a></div>
        <div className="project-deploy"><a href="https://ashishlovesagra.github.io/Projects/Project%204/index.html" target="_blank" rel='noreferrer'><button className='project-btn'>Deploy Link</button></a></div>
        </div>
      </div>
      <div className="projectBox">
        <div className="project-title">Todo-js-app</div>
        <div className="project-short"><b>Tools Use:-</b> This project is made using Html, CSS and JavaScript </div>
        <div className="pro-btn">
        <div className="project-repo"><a href="https://github.com/Ashishlovesagra/Projects/tree/main/Project%205" 
        target="_blank" rel='noreferrer'><button className='project-btn'>Project RepoLink</button></a></div>
        <div className="project-deploy"><a href="https://ashishlovesagra.github.io/Projects/Project%205/index.html" target="_blank" rel='noreferrer'><button className='project-btn'>Deploy Link</button></a></div>
        </div>
      </div>
      <div className="projectBox">
        <div className="project-title">Tic-Tac-Toe</div>
        <div className="project-short"><b>Tools Use:-</b> This project is made using Html, CSS and JavaScript </div>
        <div className="pro-btn">
        <div className="project-repo"><a href="https://github.com/Ashishlovesagra/tic-tac-toe" 
        target="_blank" rel='noreferrer'><button className='project-btn'>Project RepoLink</button></a></div>
        <div className="project-deploy"><a href="https://ashishlovesagra.github.io/tic-tac-toe/" target="_blank" rel='noreferrer'><button className='project-btn'>Deploy Link</button></a></div>
        </div>
      </div>
      <div className="projectBox">
        <div className="project-title">Analog Clock</div>
        <div className="project-short"><b>Tools Use:-</b> This project is made using Html, CSS and JavaScript </div>
        <div className="pro-btn">
        <div className="project-repo"><a href="https://github.com/Ashishlovesagra/Clock-Using-HTML--CSS---JS" 
        target="_blank" rel='noreferrer'><button className='project-btn'>Project RepoLink</button></a></div>
        <div className="project-deploy"><a href="https://ashishlovesagra.github.io/Clock-Using-HTML--CSS---JS/" target="_blank" rel='noreferrer'><button className='project-btn'>Deploy Link</button></a></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Project;
