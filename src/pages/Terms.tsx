import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Contact from '../components/Contact/Contact';

const Terms = () => {
  return (
    <div className="terms-page" style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '900px', paddingBottom: '80px' }}>
        <Link to="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '40px', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
          <ArrowLeft size={16}/> Back to Main
        </Link>
        
        <div className="section-header">
          <div className="badge" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={14} /> Policies
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '16px' }}>
            Terms & <span className="text-gradient">Conditions</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Last Updated: 2026</p>
        </div>
        
        <div className="glass-panel" style={{ padding: '48px', borderRadius: '24px', marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.6' }}>By accessing or using services provided by ORIGINN, you agree to the following Terms & Conditions:</p>
          
          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>1. Services</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>ORIGINN provides web development and related digital services strictly in accordance with a mutually agreed written scope ("Scope"). Any feature, modification, integration, or enhancement outside the Scope is excluded and may be quoted and billed separately.</p>
          </div>
          
          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>2. Project Scope, Deliverables & Acceptance</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>All requirements, deliverables, timelines, and exclusions must be agreed in writing prior to commencement.<br/><br/>Upon delivery, the client must review the deliverables within the Support Period. Any defects must be reported with clear reproducible details.<br/><br/>Failure to report issues within the Support Period constitutes final acceptance of the deliverables as complete and satisfactory.</p>
          </div>
          
          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>3. Support Period (Strict)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>A limited support window of 3 (three) calendar days begins at the earlier of (a) delivery notification, or (b) deployment to production.<br/><br/>During this window, ORIGINN will fix defects that are directly attributable to the delivered work and strictly within the agreed Scope.</p>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '16px', marginTop: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <strong style={{ color: '#ef4444', display: 'block', marginBottom: '12px', fontSize: '1.05rem' }}>Exclusions (not covered):</strong>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>New features or change requests</li>
                <li>Third-party service issues (APIs, hosting, DNS, SSL)</li>
                <li>Content changes</li>
                <li>Changes made by the client or third parties</li>
              </ul>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', marginTop: '20px' }}>After expiry, no obligation exists for fixes, updates, or support unless covered by a separate paid agreement.</p>
          </div>

          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>4. Hosting, Deployment & Infrastructure</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>ORIGINN may assist with initial deployment on third-party platforms (e.g., Vercel, Netlify). All infrastructure is owned and operated by the respective providers or the client.</p>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '16px', marginTop: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '12px', fontSize: '1.05rem' }}>ORIGINN is not responsible for:</strong>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Uptime or performance</li>
                <li>Data loss or backups</li>
                <li>Security issues at the provider level</li>
                <li>DNS, SSL, or external configurations</li>
              </ul>
            </div>
          </div>
          
          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>5. Client Responsibilities</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              The client agrees to:<br/>
              • Provide accurate requirements and content<br/>
              • Share assets and credentials on time<br/>
              • Maintain proper communication<br/><br/>
              Any delays from the client side may impact timelines.
            </p>
          </div>

          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>6. Fees, Payments & Refunds</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              Payments must be made as agreed. ORIGINN reserves the right to:<br/>
              • Pause or delay work for non-payment<br/>
              • Withhold final delivery until full payment is received<br/><br/>
              <strong style={{ color: 'var(--text-primary)' }}>All payments are non-refundable once work has started, unless agreed otherwise.</strong>
            </p>
          </div>

          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>7. Intellectual Property & License</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>Upon full payment, the client is granted a license to use the delivered project.<br/><br/>ORIGINN retains the right to reuse non-confidential components, code structures, and frameworks. Third-party tools remain subject to their own licenses.</p>
          </div>

          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>8. Limitation of Liability</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              To the maximum extent permitted by law, ORIGINN shall not be liable for:<br/>
              • Loss of business or revenue<br/>
              • Data loss<br/>
              • Website downtime<br/>
              • Any indirect or consequential damages<br/><br/>
              Total liability, if any, is limited to the amount paid for the project. All services are provided on an "as-is" basis without warranties.
            </p>
          </div>

          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>9. No Ongoing Obligation</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>After the support period ends, ORIGINN holds no responsibility for maintenance, updates, security, or performance. Any future work requires a new agreement.</p>
          </div>

          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>10. Revisions & Changes</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>Any requests beyond the agreed scope will be treated as new work and may incur additional charges.</p>
          </div>

          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>11. Termination</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>ORIGINN reserves the right to suspend or terminate services in case of non-payment, misuse, or violation of terms. Completed work remains billable.</p>
          </div>

          <div className="term-section">
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>12. Acceptance</h3>
            <p style={{ color: 'var(--text-primary)', lineHeight: '1.7', fontSize: '1.1rem', fontWeight: '500', background: 'rgba(59, 130, 246, 0.05)', padding: '24px', borderRadius: '16px', borderLeft: '4px solid var(--accent-blue)' }}>By engaging with ORIGINN, the client confirms that they have read, understood, and agreed to these Terms & Conditions.</p>
          </div>
        </div>
      </div>
      
      <div style={{ paddingBottom: '60px' }}>
        <Contact />
      </div>
    </div>
  );
};

export default Terms;
