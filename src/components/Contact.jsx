import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-description">
          Get in touch with our research team for collaborations, inquiries, or partnership opportunities.
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:ly.nguyen@eiu.edu.vn">ly.nguyen@eiu.edu.vn</a>
          </div>
          
          <div className="contact-item">
            <h3>Research Areas</h3>
            <ul>
              <li>Computer Vision</li>
              <li>Natural Language Processing</li>
              <li>Machine Learning</li>
              <li>AI Ethics & Governance</li>
            </ul>
          </div>
          
          <div className="contact-item">
            <h3>Collaboration</h3>
            <p>We welcome collaborations with academic institutions, industry partners, and research organizations worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
