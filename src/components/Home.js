import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, NavLink } from "react-bootstrap";
import "./Home.css"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            {/* <h2>Welcome to <span style={{ color: "#6c63ff" }}>Harshit Gupta</span></h2> */}


            <Container className="home-content">
              <Row>
                <Col md={7} className="home-header" style={{ width: "100%" }}>
                  <h1 style={{ paddingBottom: 15 }} className="heading">
                    Hi There!{" "}
                  </h1>

                  <h1 className="heading-name">
                    I'M
                    <strong className="main-name"> Harshit Gupta</strong>
                  </h1>

                  <div style={{ textAlign: "left" }}>
                    {/* <Type /> */}
                    <marquee width="100%" direction="left" scrollamount="18" height="100px">
                      <h1 className="purple">
                        MERN Stack Developer ,
                        Coder ,
                        Open Source Contributor
                      </h1>
                    </marquee>
                  </div>
                </Col>
              </Row>
            </Container>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, width: "max-content" }}>
              ⦿ I'm a Pre-Final student at Vellore Institute of Technology ,Bhopal pursuing Computer Science Engineering.
              <br />

              ⦿ An engineering student, with expertise in MERN Stack Development & Data Structures, and Algorithms,
              I am fluent in
              <i>
                <b> Java </b>
              </i>
              <br />
              ⦿ I adore teamwork, new technology exploration, and coding.
              <br />
              <br />

              𝗔𝗖𝗛𝗜𝗘𝗩𝗘𝗠𝗘𝗡𝗧𝗦:
              <br />
              • 300+ Total contributions till now over on GitHub.
              <br />
              • Contributed to open-source programs like GSWoC’21 and @HactoberFest'22
              <br />
              • Participated in 5+ hackathons like SIH'22, Hack The Terminal'21 and MLH hackathons
              <br />
              • Selected for Frontend developer from our college Placement Internship-Hachthon'22 among 100 Student's

              <br />
              <br />
            </p>
            <div className="btn_div mb-3">
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}> <a href="https://github.com/harshit995" style={{
                textDecoration: "none", color: "black"


              }} >Github</a></Button>
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#6c63ff" }}><a href="https://www.linkedin.com/in/harshit-gupta-152987158/" style={{
                textDecoration: "none", color: "black"


              }}>LinkedIn</a></Button>

            </div>
          </div>
          <div className="right_div">
            <img src="hp.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home