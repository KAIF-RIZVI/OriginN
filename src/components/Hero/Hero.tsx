import { ArrowRight, Code2, Smartphone } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  // HOW TO USE: Change this to `false` when you want to show that you are closed!
  const isAcceptingProjects = true;

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        
        <div className="hero-content">
          <div className="hero-badge">
            <span className={`pulse-dot-small ${isAcceptingProjects ? '' : 'closed'}`}></span>
            {isAcceptingProjects ? "Currently accepting projects" : "Currently fully booked"}
          </div>
          
          <h1 className="hero-title">
            Crafting the <span className="text-gradient">Origin</span> of <br/>
            Next-Gen <span className="text-gradient-accent">Web Apps</span>
          </h1>
          
          <p className="hero-subtitle">
            We specialize in bespoke web development, app building, and immersive digital experiences that elevate your brand and leave a lasting impression.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start Your Project <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h4>7 Days</h4>
              <p>Project Delivery</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h4>Awwwards</h4>
              <p>Level Design</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Abstract 3DCSS Element */}
          <div className="scene">
            <div className="cube">
              <div className="cube-face front glass-panel">
                <Code2 size={48} className="visual-icon" />
              </div>
              <div className="cube-face back glass-panel"></div>
              <div className="cube-face right glass-panel">
                <Smartphone size={48} className="visual-icon" />
              </div>
              <div className="cube-face left glass-panel"></div>
              <div className="cube-face top glass-panel"></div>
              <div className="cube-face bottom glass-panel"></div>
            </div>
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
