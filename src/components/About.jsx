import { FaGraduationCap, FaHeart, FaCoffee, FaCode } from 'react-icons/fa';

function About() {
  const highlights = [
    { icon: <FaGraduationCap />, text: "BA & MA Graduate" },
    { icon: <FaCode />, text: "Self-taught Developer" },
    { icon: <FaHeart />, text: "Love Learning New Tech" },
    { icon: <FaCoffee />, text: "Coffee Enthusiast" }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="about-content">
          <div className="about-card">
            <div className="about-emoji">👨‍💻</div>
            <h3>Who am I?</h3>
            <p>
              I'm a fresh graduate with a passion for web development. I completed my BA and MA, 
              and during my studies, I discovered my love for coding. Since then, I've been 
              teaching myself modern web technologies and building projects to sharpen my skills.
            </p>
          </div>

          <div className="about-card">
            <div className="about-emoji">🎯</div>
            <h3>My Goals</h3>
            <p>
              I'm looking for opportunities to grow as a developer, work on meaningful projects, 
              and contribute to a team where I can learn from experienced professionals while 
              bringing fresh ideas and enthusiasm.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <span className="highlight-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;