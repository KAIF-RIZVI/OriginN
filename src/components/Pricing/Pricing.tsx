import { CheckCircle2 } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header center">
          <div className="badge">Transparent Value</div>
          <h2 className="section-title">
            One Core Package. <br/> <span className="text-gradient">Zero Hidden Fees.</span>
          </h2>
        </div>
        
        <div className="pricing-container">
          <div className="core-pricing-card glass-panel">
            <div className="pricing-header">
              <h3>WebPro Delivery</h3>
              <p>Everything you need to launch a premium brand online.</p>
            </div>
            <div className="pricing-amount">
              <span className="original-price">₹14,999</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <div className="current-price text-gradient-accent">₹4,999</div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500, letterSpacing: '0.02em' }}>All-inclusive</span>
              </div>
            </div>
            
            <ul className="pricing-feature-list">
              <li><CheckCircle2 size={24} className="feature-icon" /> <span>Custom Premium Responsive Design</span></li>
              <li><CheckCircle2 size={24} className="feature-icon" /> <span>Up to 5 Dynamic Pages</span></li>
              <li><CheckCircle2 size={24} className="feature-icon" /> <span>Conversion Optimization Architecture</span></li>
              <li><CheckCircle2 size={24} className="feature-icon" /> <span>7-Day Rapid Delivery Guarantee</span></li>
              <li><CheckCircle2 size={24} className="feature-icon" /> <span>7 Days Technical Support</span></li>
            </ul>
            
            <a href="#contact" className="btn btn-primary cta-btn">Get Started Now</a>
          </div>
        </div>
        
        <div className="trust-badges-container" style={{ marginTop: '56px' }}>
          <div className="trust-badge">
            <span className="checkbox">✓</span> See design first — pay when ready
          </div>
          <div className="trust-badge">
            <span className="checkbox">✓</span> Found cheaper? We match it
          </div>
          <div className="trust-badge">
            <span className="checkbox">✓</span> 7 days
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
