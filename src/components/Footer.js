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
              <a href="https://www.instagram.com/harshit5545/"> <i className='fa-brands fa-instagram'></i></a>
              <a href="https://www.facebook.com/guptharshit/"> <i class="fa-brands fa-facebook mx-3"></i></a>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>

            <p>gharshit89@gmail.com</p>
            <p>+91 9958328356</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <a href='https://drive.google.com/file/d/1Xz3lz5N-_zFQ_j1NneAYpHXW694wsCFY/view?usp=sharing' target='_blank' style={{
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