import { Code2, Smartphone, MonitorSmartphone, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    id: 'website-development',
    icon: <Code2 size={32} />,
    title: 'Website Development',
    description: 'Bespoke, high-performance websites built with modern frameworks and best practices.'
  },
  {
    id: 'portfolio-development',
    icon: <LayoutGrid size={32} />,
    title: 'Portfolio Development',
    description: 'Awwwards-level portfolios designed to showcase your work with striking, premium aesthetics.'
  },
  {
    id: 'domain-helping',
    icon: <MonitorSmartphone size={32} />,
    title: 'Domain Helping',
    description: 'End-to-end digital solutions that seamlessly integrate your brand across all digital touchpoints.'
  },
  {
    id: 'logo-building',
    icon: <Smartphone size={32} />,
    title: 'Logo Building',
    description: 'Scalable and vibrant brand identity engineering, from concept to high-fidelity vector delivery.'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        
        <div className="section-header">
          <div className="badge">Our Expertise</div>
          <h2 className="section-title">
            Elevating Brands Through <br/> 
            <span className="text-gradient">Digital Innovation</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card glass-panel" key={index}>
              <div className="service-icon-wrapper">
                <div className="service-icon-glow"></div>
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to={`/services/${service.id}`} className="service-link">
                View Pricing <span className="arrow">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
