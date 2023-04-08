import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Harshit Gupta</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>
              • Primary Skills: Java, MERN Web Development & Data Structures And Algorithms
              <br />
              • Secondary Skills: Python, Object-Oriented Language, DBMS, OS, CN, Engineering Design, Agile and Scrum
              <br />
              • Toolkits: Git/GitHub, Visual Studio Code , IntelliJ Idea , Postman , Github desktop
              <br />
              • Database: MongoDB, Firebase, and MySQL
              <br />
              • Hosting Platform: Netlify, Heroku, and GitHub
              <br />
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="Harshit.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About