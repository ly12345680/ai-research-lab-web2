import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
          alt="AI Research Lab"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1>AI Research Lab - School of Computing and Information Technology</h1>
          <p>Advancing the frontiers of artificial intelligence through innovative research and development</p>
          <div className="hero-buttons">
            <a href="#products" className="btn-primary">Explore Research</a>
            <a href="#contact" className="btn-secondary">Join Our Team</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
