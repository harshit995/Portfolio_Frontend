import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Harshit Gupta</h4>
            <p>© {year} Harshit Gupta All rights reserved</p>
            <p className='d-flex'>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook mx-3'></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>

            <p>gharshit89@gmail.com</p>
            <p>+91 9958328356</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <a href='https://docs.google.com/document/d/1n1K7qm2xFKOsFK3dX5c_aWUhnE9Buhn_JRHEnRmyba8/edit?usp=sharing' style={{
              textDecoration: "none", color
                : "white"
            }}>Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer