import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Weather App',
      description: 'A beautiful weather app that shows real-time weather data for any city.',
      tech: ['React', 'API', 'CSS'],
      category: 'react',
      image: '🌤️',
      github: 'https://github.com/shaheedadany/weather-app',
      demo: 'https://weather-app.demo.com',
      color: '#99a8b3'
    },
    {
      title: 'Todo List App',
      description: 'A sleek todo app with local storage and dark mode support.',
      tech: ['React', 'LocalStorage', 'CSS'],
      category: 'react',
      image: '✅',
      github: 'https://github.com/shaheedadany/todo-app',
      demo: 'https://todo-app.demo.com',
      color: '#99a8b3'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React.',
      tech: ['React', 'CSS', 'Framer'],
      category: 'react',
      image: '📱',
      github: 'https://github.com/shaheedadany/portfolio',
      demo: '#',
      color: '#99a8b3'
    },
    {
      title: 'Calculator App',
      description: 'A functional calculator with a modern design.',
      tech: ['HTML', 'CSS', 'JS'],
      category: 'javascript',
      image: '🧮',
      github: 'https://github.com/shaheedadany/calculator',
      demo: 'https://calculator.demo.com',
      color: '#99a8b3'
    },
    {
      title: 'Landing Page',
      description: 'A responsive landing page for a fictional startup.',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      category: 'html-css',
      image: '🚀',
      github: 'https://github.com/shaheedadany/landing-page',
      demo: 'https://landing.demo.com',
      color: '#99a8b3'
    }
  ];

  const filters = ['all', 'react', 'javascript', 'html-css'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Things I've built</p>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-chip ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.replace('-', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card" style={{ '--card-color': project.color }}>
              <div className="project-emoji">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank"><FaGithub /> Code</a>
                <a href={project.demo} target="_blank"><FaExternalLinkAlt /> Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;