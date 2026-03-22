import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Contact from '../components/Contact/Contact';
import './ServiceDetail.css';

const serviceData = {
  'website-development': {
    title: 'Website Development',
    description: 'Bespoke, high-performance websites built with modern frameworks and cutting edge design principles.',
    pricing: [
      { tier: 'WebPro', price: '₹4,999', originalPrice: '₹14,999', subText: 'All-inclusive — design, development', features: ['Up to 5 Pages', 'Responsive Design', 'Premium Animations', '1 Month Technical Support'] },
      { tier: 'WebUltra', price: '₹7,499', originalPrice: '₹24,999', subText: 'All-inclusive — design, development', features: ['Custom Full-Stack App', 'CMS Integration', 'Advanced Analytics', 'Performance & Speed Optimization'] }
    ]
  },
  'portfolio-development': {
    title: 'Portfolio Development',
    description: 'Awwwards-level portfolios explicitly designed to showcase your unique work with striking, premium aesthetics.',
    pricing: [
      { tier: 'PortfolioPro', price: '₹2,999', originalPrice: '₹5,999', subText: 'High-performance digital presence', features: ['Single Page Layout', 'Smooth Scroll Reveal', 'Gallery Section', 'Contact Form Integration'] },
      { tier: 'PortfolioUltra', price: '₹5,999', originalPrice: '₹12,499', subText: 'Awwwards-winning premium aesthetic', features: ['3D WebGL Visuals', 'Custom Micro-animations', 'Dark Mode Toggle', 'Premium Custom Cursors'] }
    ]
  },
  'domain-helping': {
    title: 'Domain Assistance',
    description: 'Custom domain and hosting configuration support for your web applications.',
    pricing: []
  },
  'logo-building': {
    title: 'Logo Building',
    description: 'Vibrant, premium brand identity engineering, from abstract concepts to high-fidelity vector delivery.',
    pricing: [
      { tier: 'LogoPro', price: '₹499', originalPrice: '₹1,599', subText: 'Professional identity package', features: ['2 Distinct Logo Concepts', '2 Revision Rounds', 'Final Vector SVG Files', 'Curated Color Palette'] },
      { tier: 'LogoUltra', price: '₹799', originalPrice: '₹2,499', subText: 'Complete brand ecosystem', features: ['5 Concept Exploration', 'Unlimited Revisions', 'Full Brand Guidelines Document', 'Complete Social Media Kit'] }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="container" style={{ paddingTop: '120px', minHeight: '60vh' }}>
        <h2>Service not found</h2>
        <Link to="/" className="btn btn-outline" style={{ marginTop: '20px' }}>
          <ArrowLeft size={16} style={{ marginRight: '8px' }}/> Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="container" style={{ padding: '150px 24px 60px' }}>
        <Link to="/" className="back-link"><ArrowLeft size={16}/> Back to Main</Link>
        <div className="service-header">
          <div className="badge">Service Breakdown</div>
          <h1 className="service-title">{service.title}</h1>
          <p className="service-subtitle">{service.description}</p>
        </div>
        
        {serviceId === 'domain-helping' ? (
          <div className="glass-panel" style={{ padding: '60px 40px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '24px', fontWeight: 600 }}>Hosting & Domain Policy</h3>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              We build your projects to seamlessly deploy on your own <strong>custom domain</strong> and target infrastructure.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px' }}>
              We also fully support deployment onto free global hosting providers like <strong>Vercel</strong> or <strong>Netlify</strong> (subject to their specific terms of service—uptime and hosting availability are not guaranteed).
            </p>
            <a href="#contact" className="btn btn-primary" style={{ padding: '16px 32px', display: 'inline-flex', alignItems: 'center' }}>
              Request Configuration <ArrowLeft size={16} style={{ marginLeft: '8px', transform: 'rotate(180deg)' }}/>
            </a>
          </div>
        ) : (
          <>
            <h3 className="pricing-title">Pricing & Packages</h3>
            <div className="pricing-grid">
              {service.pricing.map((tier, idx) => (
                <div key={idx} className="pricing-card glass-panel">
                  <h4 className="tier-name">{tier.tier}</h4>
                  {('subText' in tier) && <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px'}}>{(tier as any).subText}</p>}
                  <div className="tier-pricing-container">
                    {('originalPrice' in tier) && <span className="tier-original-price">{(tier as any).originalPrice}</span>}
                    <div className="tier-price text-gradient-accent">{tier.price}</div>
                  </div>
                  <ul className="tier-features">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx}><span style={{ color: 'var(--accent-blue)', marginRight: '8px' }}>✓</span> {feature}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>Select Package</a>
                </div>
              ))}
            </div>
            
            <p className="pricing-disclaimer" style={{ textAlign: 'center', marginTop: '32px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              * <strong style={{color: 'var(--text-primary)'}}>Payment Terms:</strong> 25% upfront token advance, and the remaining 75% balance upon project completion.
            </p>
          </>
        )}
        
        <div className="trust-badges-container">
          <div className="trust-badge">
            <span className="checkbox">✓</span> See design first — pay when ready
          </div>
          <div className="trust-badge">
            <span className="checkbox">✓</span> Found cheaper? We match it
          </div>
          <div className="trust-badge">
            <span className="checkbox">✓</span> 72 hours or full refund
          </div>
        </div>
      </div>
      
      <div style={{ paddingBottom: '60px' }}>
        <Contact />
      </div>
    </div>
  );
};

export default ServiceDetail;
