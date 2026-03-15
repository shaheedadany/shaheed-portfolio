import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <span className="logo-text">MS</span>
          <span className="logo-dot">.</span>
        </a>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="nav-social-mobile">
            <a href="https://github.com/shaheedadany" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/mhd-shaheed" target="_blank"><FaLinkedin /></a>
            <a href="mailto:shaheedmhd4@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="nav-social">
          <a href="https://github.com/shaheedadany" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com/in/mhd-shaheed" target="_blank"><FaLinkedin /></a>
          <a href="mailto:shaheedmhd4@gmail.com"><FaEnvelope /></a>
        </div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;