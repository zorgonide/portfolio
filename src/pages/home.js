import React, { useState, useEffect } from "react";
import { Education, Projects } from "../data/data";
import Project from "./Project";
import Ammar from "../images/ammar.jpg";
import EduBlock from "./Education";
import Resume from "../static/Ammar_Resume.pdf";
import Experiences from "./Experiences";
function Home() {
  const [copyright, setCopyright] = useState("");
  const [isMenuActive, setMenuActive] = useState(false);
  const handleMenuOpen = () => {
    setMenuActive(!isMenuActive);
  };

  const handleMenuClose = () => {
    setMenuActive(!isMenuActive);
  };
  useEffect(() => {
    const d = new Date();
    let year = d.getFullYear();
    setCopyright(`${year} Ammar Khurshid`);
  }, []);

  return (
    <div>
      <div
        id="mobile-menu-open"
        className={`shadow-large ${isMenuActive ? "active" : ""}`}
        onClick={handleMenuOpen}
      >
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <header>
        <div
          id="mobile-menu-close"
          className={isMenuActive ? "active" : ""}
          onClick={handleMenuClose}
        >
          <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul id="menu" className="shadow">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#certificate">Certifications</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>

      <div id="lead">
        <div id="particles-js"></div>
        <div id="lead-content">
          <h1>Ammar Khurshid</h1>
          <h2>Fullstack Web Developer</h2>
          <a href={Resume} className="btn-rounded-white">
            Download Resume
          </a>
        </div>

        <div id="lead-overlay"></div>

        <div id="lead-down">
          <a href="#about" style={{ color: "white" }}>
            <span>
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
      <div id="about">
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-4">
              <h2 className="heading">About Me</h2>
            </div>
            <div className="col-md-8">
              <img
                src={Ammar}
                alt="Me"
                style={{
                  marginBottom: "10px",
                  borderRadius: "80%",
                }}
                width="200"
                height="200"
              />
              <p style={{ textAlign: "left" }}>
                Hi, I'm <b>Ammar</b> :D
                <br />
                I'm an MSc Computing Science student at the{" "}
                <a href="https://www.gla.ac.uk/">University of Glasgow</a>
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>.
                <br />
                <code>
                  A frontend web developer by profession with a proficiency in
                  ReactJs.
                </code>
                <br />
                <br />
                Hit me up for anything and everything tech related, or if you
                want to see me talk about why Samwise Gamgee is the real hero,
                not Frodo Baggins.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="experience" className="background-alt">
        <h2 className="heading">Experience</h2>
        <Experiences />
      </div>

      <div id="education">
        <h2 className="heading">Education</h2>
        {Education.map((education, i) => (
          <EduBlock key={i} education={education} />
        ))}
      </div>

      <div id="projects" className="background-alt">
        <h2 className="heading">Projects</h2>
        <div className="container">
          <div className="row">
            {Projects.map((project, i) => (
              <Project key={i} project={project} />
            ))}
          </div>
        </div>
      </div>

      <div id="skills">
        <h2 className="heading">Skills</h2>
        <ul>
          <li>Web Development</li>
          <li>Adobe Analytics</li>
          <li>UI/UX Design</li>
        </ul>
        <br />
        <h2 className="heading">Languages</h2>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
        </ul>
        <br />

        <h2 className="heading">Technologies</h2>
        <ul>
          <li>React</li>
          <li>React Native</li>
          <li>Angular</li>
          <li>GatsbyJs</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Raspberry Pi</li>
          <li>Postman</li>
          <li>Figma</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
        </ul>
      </div>
      <div className="optional-section background-alt" id="certificate">
        <h2 className="heading">Certifications</h2>
        <div className="optional-section-block">
          <ul>
            <li>Full-Stack Web Development with React Specialization</li>
            <li>Introduction to User Experience Design on Coursera</li>
            <li>
              Introduction to Self-Driving Cars by University of Toronto on
              Coursera.
            </li>
            <li>
              The Arduino Platform and C Programming by University of
              California, Irvine on Coursera.
            </li>
            <li>Data Analysis with Python by IBM on Coursera.</li>
            <li>Build an E-commerce Dashboard with Figma on Coursera</li>
            <li>
              Server-side Development with NodeJS, Express and MongoDB on
              Coursera
            </li>
            <li>Creating a Personal Site with Gatsby</li>
          </ul>
        </div>
      </div>

      <div id="contact">
        <h2>Get in Touch</h2>
        <br />
        <div id="contact-form">
          <form
            method="POST"
            action="https://getform.io/f/73ebbb0e-851d-4921-ae48-e8f5b4b64f56"
          >
            <input
              type="hidden"
              name="_subject"
              value="Contact request from personal website"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 copyright">
              <p id="copyright">{copyright}</p>
            </div>
            <div className="col-sm-2 top">
              <a href="#about" style={{ color: "white" }}>
                <span id="to-top">
                  <i className="fa fa-chevron-up" aria-hidden="true"></i>
                </span>
              </a>
            </div>
            <div className="col-sm-5 social">
              <ul>
                <li>
                  <a href="https://github.com/zorgonide" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ammar-khurshid-757140177/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ammar.khurshid/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export const Head = () => (
  <>
    <title>Portfolio 💼</title>;
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
      rel="stylesheet"
    />
  </>
);

export default Home;
