import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaGitAlt, FaBootstrap 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, 
  SiRedux, SiVercel, SiNetlify 
} from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, level: 80, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, level: 75, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 70, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, level: 65, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 60, color: '#47A248' },
    { name: 'Bootstrap', icon: <FaBootstrap />, level: 85, color: '#7952B3' },
    { name: 'Tailwind', icon: <SiTailwindcss />, level: 75, color: '#06B6D4' },
    { name: 'Git', icon: <FaGitAlt />, level: 80, color: '#F05032' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I've worked with</p>

        <div className="skills-cloud">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-bubble"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderColor: skill.color,
                color: skill.color
              }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;