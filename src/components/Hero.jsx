import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import Typed from 'typed.js';
import profileImage from '../assets/profile.jpg'; // Import your photo

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
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

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">👋 Welcome to my portfolio</div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Muhammed Shaheed</span>
          </h1>
          <h2 className="hero-subtitle">
            I'm <span ref={typedRef}></span>
          </h2>
          <p className="hero-description">
            I'm a passionate web developer who loves creating beautiful and functional websites. 
            I recently completed my degree and I'm excited to start my career in tech!
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Hire Me</a>
            <a href="#projects" className="btn btn-outline">View Work</a>
            <a href="/resume.pdf" download className="btn btn-icon">
              <FaArrowDown />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="profile-frame">
              <img 
                src={profileImage} 
                alt="Muhammed Shaheed"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;