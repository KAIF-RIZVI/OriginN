import { ExternalLink } from 'lucide-react';
import './Work.css';

const projects = [
  {
    title: 'E-Commerce Redefined',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Fintech Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Creative Agency Portfolio',
    category: 'Portfolio Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  }
];

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="section-header center">
          <div className="badge">Featured Projects</div>
          <h2 className="section-title">
            Proof of <span className="text-gradient">Excellence</span>
          </h2>
        </div>
        
        <div className="work-grid">
          {projects.map((project, idx) => (
            <div className="work-card" key={idx}>
              <div className="work-image-container">
                <img src={project.image} alt={project.title} className="work-image" />
                <div className="work-overlay">
                  <a href="#" className="work-link">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="work-info">
                <p className="work-category">{project.category}</p>
                <h3 className="work-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
