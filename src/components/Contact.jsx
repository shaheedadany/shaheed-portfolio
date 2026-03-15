import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's connect!</p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h3>Email</h3>
              <a href="mailto:shaheedmhd4@gmail.com">shaheedmhd4@gmail.com</a>
            </div>

            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>Phone</h3>
              <a href="tel:+919745635084">+91 97456 35084</a>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Location</h3>
              <p>Malappuram, Kerala, India</p>
            </div>

            <div className="social-card">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://github.com/shaheedadany" target="_blank"><FaGithub /></a>
                <a href="https://linkedin.com/in/mhd-shaheed" target="_blank"><FaLinkedin /></a>
                <a href="mailto:shaheedmhd4@gmail.com"><FaEnvelope /></a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Send Message ✨
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;