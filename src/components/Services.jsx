import { FaCode, FaMobile, FaRocket, FaChartLine } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: 'Custom Website Development',
      desc: 'Responsive, modern websites tailored to your business needs'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile-First Design',
      desc: 'Websites that look perfect on all devices'
    },
    {
      icon: <FaRocket />,
      title: 'Performance Optimization',
      desc: 'Fast loading speeds that keep visitors engaged'
    },
    {
      icon: <FaChartLine />,
      title: 'SEO Ready',
      desc: 'Built with search engines in mind to help you get found'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">What I Can Do For You</h2>
        <p className="section-subtitle">Services to help your business grow</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// THIS IS CRITICAL - MAKE SURE THIS LINE EXISTS!
export default Services;