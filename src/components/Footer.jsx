import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; 2025 AI Research Lab. All rights reserved.</p>
            <p>Contact us at <a href="mailto:ly.nguyen@eiu.edu.vn">ly.nguyen@eiu.edu.vn</a></p>
          </div>
          
          <div className="footer-links">
            <h4>Additional Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
