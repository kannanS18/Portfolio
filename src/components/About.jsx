import React from "react";
import "./About.css";
import StatBox from "./StatBox"
import Progress from "./Progress";

export default function About() {
  return (
    <>
      {/* First section: Stat cards */}
      <section className="about-section-unique">
        <div className="about-left-unique">
          <h1>
            <span className="about-highlight-unique">C</span>artify
          </h1>
          <p className="about-intro-unique">
            Cartify is a streamlined online fruit shopping application built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can browse a variety of fruits, specify quantities, select purchase dates, and instantly view the total cost based on fixed per-kg pricing.

            The application features a dynamic, card-based user interface for easy item selection and intuitive forms for adding products to the cart. Backend APIs, implemented with Mongoose, handle all CRUD operations efficiently, ensuring reliable data management and persistence. Key functionalities include real-time price calculation, comprehensive cart management with edit and delete options, and a fully responsive design — demonstrating strong expertise in full-stack development and user-focused interface design.
          </p>
          <p className="about-note-unique">
            <strong>Tech Stack:React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, and CSS.</strong>
          </p>
        </div>

        <div className="about-right-unique">
          <div className="stat-grid-unique">
            <StatBox className="green-unique">
              <h2>35%</h2>
              <p>React.js</p>
            </StatBox>
            <StatBox className="blue-unique">
              <h2>35%</h2>
              <p>Node.js , Express.js</p>
            </StatBox>
            <StatBox className="navy-unique">
              <h2>20%</h2>
              <p>MongoDB</p>
            </StatBox>
            <StatBox className="orange-unique">
              <h2>10%</h2>
              <p>HTML,CSS</p>
            </StatBox>
          </div>
        </div>
      </section>

      {/* Second section: Progress bars */}
      <section className="about-section-progress">
        <div className="about-left-progress">
          <h1>
            <span className="about-highlight-progress">TO</span>DO List 
          </h1>
          <p className="about-intro-progress">
           The To-Do List App is a responsive, full-stack task management application developed using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to add, view, and delete tasks with real-time updates and persistent data storage.

          The frontend is built with React, using Hooks (useState, useEffect) for efficient state management and custom CSS for a clean, interactive UI. The backend uses Express.js and Node.js to handle API requests, while MongoDB stores user tasks in a structured and scalable format. This project demonstrates complete CRUD operations, API integration, form handling, and seamless communication between client and server.


          </p>
          <p className="about-note-progress">
            <strong>Tech Stack:React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, and CSS.</strong>
          </p>
        </div>

        <div className="about-right-progress">
          <div className="skills-bar-progress">
            <div className="skill-progress">
              <span>React.js</span>
              <div className="progress-progress">
                <Progress percent="40%" className="green-progress" >40%</Progress>
              </div>
            </div>
            <div className="skill-progress">
              <span>Node.js ,Express.js</span>
              <div className="progress-progress">
                <Progress percent='30%' className="blue-progress" >30%</Progress>
              </div>
            </div>
            <div className="skill-progress">
              <span>MongoDB</span>
              <div className="progress-progress">
               <Progress percent='20%' className="navy-progress" >20%</Progress>
              </div>
            </div>
            <div className="skill-progress">
              <span>HTML,CSS</span>
              <div className="progress-progress">
                <Progress percent='10%' className="orange-progress" >10%</Progress>
              </div>
            </div>
          </div>
          <a
            className="about-projects-btn"
            href="https://www.canva.com/design/DAGpLmrIzrE/7JTxsBS-gJl15uvx35aoSw/watch?utm_content=DAGpLmrIzrE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h74a9b8bfe8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
        </div>
      </section>
    </>
  );
}