import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import Typed from 'typed.js';
import profileImage from '../assets/profile.jpg';

function Hero() {
  const typedRef = useRef(null);
  const typedElementRef = useRef(null); // Add this ref for the span element

  useEffect(() => {
    // Make sure the element exists before initializing Typed
    if (typedElementRef.current) {
      const typed = new Typed(typedElementRef.current, {
        strings: [
          'a Web Developer',
          'a React Enthusiast',
          'a Problem Solver',
          'a Tech Explorer'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
      });

      // Cleanup function
      return () => {
        typed.destroy();
      };
    }
  }, []); // Empty dependency array means this runs once after mount

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">👋 Welcome to my portfolio</div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Muhammed Shaheed</span>
          </h1>
          <h2 className="hero-subtitle">
            I'm <span ref={typedElementRef}></span> {/* Use the ref here */}
          </h2>
          <p className="hero-description">
            I'm a passionate web developer who loves creating beautiful and functional websites. 
            I recently completed my degree and I'm excited to start my career in tech!
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Hire Me</a>
            <a href="#projects" className="btn btn-outline">View Work</a>
            <a href="/resume.pdf" download className="btn-icon">
              <FaArrowDown />
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/shaheedadany" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mhd-shaheed" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:shaheedmhd4@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src={profileImage} 
              alt="Muhammed Shaheed"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;