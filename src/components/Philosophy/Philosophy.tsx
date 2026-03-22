import './Philosophy.css';

const Philosophy = () => {
  return (
    <section className="philosophy">
      <div className="container">
        <h2 className="philosophy-title">Built to solve one problem.</h2>
        
        <div className="philosophy-content">
          <p>
            Getting a quality business website made shouldn't take 6 weeks and cost <span style={{ textDecoration: 'line-through', opacity: 0.6, fontSize: '0.9em' }}>₹50,000</span>. So we built a delivery system that does it in 72 hours at <span className="price-highlight">₹4,999</span> — without cutting corners.
          </p>
          <div className="philosophy-3d-wrapper">
            <div className="wireframe-globe">
              <div className="globe-ring"></div>
              <div className="globe-ring"></div>
              <div className="globe-ring"></div>
              <div className="globe-ring"></div>
              <div className="globe-ring x-axis"></div>
              <div className="globe-ring y-axis"></div>
              <div className="core-star"></div>
            </div>
          </div>
          <p>
            <strong>We design around your business.</strong> Your customers, your services, your market — not a generic template. Every design is strategically conversion-structured from day one so your audience automatically engages with it. You see the full design before you pay a single rupee.
          </p>
          <p className="philosophy-highlight">
            20+ businesses are live on it. The designs convert. The customers come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
