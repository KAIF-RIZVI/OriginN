import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="badge">Who We Are</div>
            <h2 className="section-title">
              We Don't Just Build Websites. <br />
              We Engineer <span className="text-gradient">Digital Assets.</span>
            </h2>
            <p className="about-text">
              OriginN is a premium digital agency specializing in high-performance web applications, striking portfolio developments, and complete brand identity ecosystems. We bridge the gap between stunning, Awwwards-winning aesthetics and ruthless, conversion-focused functionality.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <h3>90<sup>+</sup>%</h3>
                <p>Client Success</p>
              </div>
              <div className="about-stat">
                <h3>4.5<sup>+</sup></h3>
                <p>Average Rating</p>
              </div>
              <div className="about-stat">
                <h3>24/7</h3>
                <p>Dedicated Support</p>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="glass-panel about-image-wrapper">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team Collaboration" className="about-img" />
              <div className="floating-badge">Innovation First</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
