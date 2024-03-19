import profile from './assets/profile.png'
import img1 from './assets/projects/1.png'
import img2 from './assets/projects/2.png'
import img3 from './assets/projects/3.png'
import mail from "./assets/mail.svg"
import linkedin from "./assets/linkedin.svg"
import github from "./assets/github.svg"
import twitter from "./assets/twitter.svg"


import './App.css'

function App() {
  

  return (
    <>
    <html>
       <header className="header-wrapper">
        <div><h3>Sobinesh</h3></div>
        <ul>
         <li> <a href="#contact">
            <button>Contact me</button>
          </a></li>
        </ul>
    </header>

    <div className="hero">
      <div>
        <img className="profile-img" src={profile} />
      </div>
      <h1>Hey, I&apos;m Sobinesh 👋</h1>
      <p>Software Developer</p>
    </div>

    <div className="about">
      <div className="about-wrapper">
        <div className="col">
          <h2>My Career So Far</h2>
          <p>
            Graduate with a Bachelor of Engineering inComputer Science Engineer seeking an entry-level position as a Software
            Developer. Adept at coding and passionate about leveraging technology to solve real-world problems.</p>
            <br></br>
            <p > Proven ability to quickly learn and apply new technologies, evident through coursework and hands-on projects. Possesses strong analytical and problem-solving skills. Eager to contribute to innovative softwaresolutions and bring a fresh perspective to a dynamicdevelopment team.
          </p>
        </div>
        <div className="skills col">
          <h2>My Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
            <li>next.js</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="projects">
      <div className="project-wrapper">
        <h2>My Projects</h2>
        <ul>
          <li>
            <a href="#">
              <img src={img1} />
              <p>Project #1</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={img2} />
              <p>Project #2</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={img3} />
              <p>Project #3</p>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="socials" id="contact">
      <div className="socials-wrapper">
        <div>
          <h2>Contact Me</h2>
          <p>+91 8438146105</p>
          <p>sobinesh@gmail.com</p>
          <p>Tamil Nadu, India</p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/sobinesh" target="_blank"><img src={github} /></a>
          <a href="https://www.linkedin.com/in/sobinesh-s" target="_blank"><img src={linkedin} /></a>
          <a href="https://twitter.com/SSobinesh97844" target="_blank"><img src={twitter} /></a>
          <a href="mailto:[sobinesh@gmail.com]" target="_blank"><img src={mail} /></a>
        </div>
      </div>
    </div>
    </html>
    </>
  )
}

export default App
