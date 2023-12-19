import React from 'react'
import "./About.css"

const ExtraCurricular = () => {
    return (
        <>
            <div className='d-flex justify-center'>
                <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
                    <div className="container main_container d-flex justify-content-around flex-wrap">
                        <div className="left_container mt-5" style={{ width: 500 }}>
                            <h2>Achievements</h2>
                            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>
                                • Member, Team SERVICURE in the Smart India Hackathon (National Level) Selected in top 10 finalists from University round.

                                <br />
                                • Successfully Merged 6+ Pr’s in Open source event, Hacktoberfest-2021.
                                <br />
                                • Qualified Level 1 of FlipKart Grid 5.0 .
                                <br />
                                • HackerRank 3 Star in Java. Leetcode and GFG – 180+ problem Solved
                                <br />
                                • Codekaze 2023 coding contest by Coding Ninjas, where I secured a rank of 14,412
                                <br />
                            </p>
                        </div>
                        <div className="right_container mt-3">
                            <img src="Capture6.JPG" alt="" />
                        </div>
                    </div>
                </div>

                <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
                    <div className="container main_container d-flex justify-content-around flex-wrap">
                        <div className="left_container mt-5" style={{ width: 500 }}>
                            <h2>ExtraCurricular</h2>
                            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>
                                • Contributed to Open-Source like Script winter of  Code and participated in 6+ hackathons of MLH ,Unstop and Devpost Hackathons.
                                <br />
                                • Volunteer in Clubs, Inter University Techno-Cultural Festival
                                <br />
                                • Sports- Badminton , Cricket
                                <br />
                                • Webinars attend: <a href="https://www.linkedin.com/posts/harshit-gupta-152987158_interviewtips-drgviswanathan-vitbhopallions-activity-7126979343808946176-QvU0?utm_source=share&utm_medium=member_desktop">Interview skills session</a>, <a href="https://www.linkedin.com/posts/harshit-gupta-152987158_success-vitbhopallions-drgviswanathan-activity-7020735181451866112-nv6z?utm_source=share&utm_medium=member_desktop"> Project selection and skill building</a>
                                <br />
                            </p>
                        </div>
                        <div className="right_container mt-3">
                            <img src="Capture7.JPG" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExtraCurricular