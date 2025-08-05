import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import myAboutImg from "../assets/image.png";

export default function Home() {
  const [showName, setShowName] = useState(false);
  const [showDev, setShowDev] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => setShowName(true), 1200); 
    const devTimer = setTimeout(() => setShowDev(true), 2200);   
    const btnTimer = setTimeout(() => setShowBtn(true), 2200);   
    return () => {
      clearTimeout(nameTimer);
      clearTimeout(devTimer);
      clearTimeout(btnTimer);
    };
  }, []);

  return (
    <div className="Home">
      <div className="BG-Img"></div>
      <div className="NAME">
        {showName && (
          <h1 className="pop-in">IM KANNAN</h1>
        )}
        {showDev && (
          <h2 className="slide-in-right">A FULLSTACK DEVELOPER</h2>
        )}
        {showBtn && (
            <button
    type="button"
    className="pop-in"
    onClick={() =>
      window.open(
        "https://www.canva.com/design/DAGpLmrIzrE/7JTxsBS-gJl15uvx35aoSw/watch?utm_content=DAGpLmrIzrE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h74a9b8bfe8",
        "_blank",
        "noopener,noreferrer"
      )
    }
  >
    RECENT PROJECT
  </button>
        )}
      </div>
      <section className="about-section"  id="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hey, I’m <strong>KANNAN</strong>—a passionate and driven full-stack
              developer with a strong foundation in modern web technologies,
              including Python and the MERN stack. As a techn enthusiast, my
              curiosity also extends to hardware and electronics, where I enjoy
              experimenting with microcontrollers and IoT concepts to broaden my
              understanding of how software and hardware interact. I am committed
              to continuous learning and thrive on solving real-world problems
              through innovative and collaborative solutions.
            </p>
          </div>
          <div className="about-image">
            <img
              src={myAboutImg}
              alt="Illustration of Kannan at work"
            />
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2>MY SERVICES</h2>
        <div className="service-grid">
          <div className="service-card">
            <span className="icon">
              {" "}
              <FontAwesomeIcon icon={faReact} />
            </span>
            <div className="service-card-content">
              <h3>Frontend Development</h3>
              <p>
                Build responsive, dynamic, and engaging user interfaces with
                React.js. Create SPAs, reusable components, and integrate APIs
                seamlessly for high-performance frontend experiences.
              </p>
            </div>
          </div>
          <div className="service-card">
            <span className="icon">
              <FontAwesomeIcon icon={faServer} />
            </span>
            <div className="service-card-content">
              <h3>Backend Development</h3>
              <p>
                Develop RESTful APIs, handle authentication, manage data flow,
                and ensure robust server-side logic using Node.js and Express.js
                for scalable web applications.
              </p>
            </div>
          </div>
          <div className="service-card">
            <span className="icon">
              <FontAwesomeIcon icon={faDatabase} />
            </span>
            <div className="service-card-content">
              <h3>Database Management</h3>
              <p>
                Design and manage efficient MongoDB databases with proper schema,
                indexing, and optimized queries. Implement CRUD operations, data
                validation, and backups.
              </p>
            </div>
          </div>
          <div className="service-card">
            <span className="icon">
              <FontAwesomeIcon icon={faDev} />
            </span>
            <div className="service-card-content">
              <h3>Fullstack App Development</h3>
              <p>
                End-to-end development of complete web applications combining
                frontend, backend, and database, ensuring seamless integration,
                scalability, and performance.
              </p>
            </div>
          </div>
          <div className="service-card">
            <span className="icon">
              {" "}
              <FontAwesomeIcon icon={faShieldHalved} />
            </span>
            <div className="service-card-content">
              <h3>Auth & Testing</h3>
              <p>
                Implement authentication, secure APIs, validate data, and protect
                applications. Ensure reliability with unit, integration, and
                end-to-end testing (Jest, Cypress).
              </p>
            </div>
          </div>
          <div className="service-card">
            <span className="icon">
              <FontAwesomeIcon icon={faRocket} />
            </span>
            <div className="service-card-content">
              <h3>Deployment & DevOps</h3>
              <p>
                Deploy applications on cloud platforms (Vercel, Render, AWS). Set
                up CI/CD pipelines, monitor performance, handle domain setup, and
                ensure seamless production deployment.
              </p>
            </div>
          </div>
        </div>
        <button className="service-btn" type="button"
          onClick={() =>
      window.open(
"https://drive.google.com/drive/u/0/folders/1XmhJdQkltOsfATVegrFi9uVNjA1d6OXE"
      )}>
          Certificates
        </button>
      </section>
    </div>
  );
}