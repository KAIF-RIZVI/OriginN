import { useState, useEffect } from 'react';
import { Send, Mail, Phone, Linkedin, MapPin, FileText, MessageCircle, CheckCircle, Share2, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    // Check if user successfully returned from FormSubmit Captcha wrapper
    if (window.location.search.includes("submitted=true")) {
      setIsSubmitted(true);
      window.history.replaceState({}, document.title, window.location.pathname + "#contact");
      setTimeout(() => setIsSubmitted(false), 8000);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Note: Do NOT preventDefault() on success because we need the native POST for the Captcha wrapper
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    if (!name.trim() || !email.trim() || !message.trim()) {
      e.preventDefault();
      setErrorText("Please complete all required fields before proceeding.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      setErrorText("Please provide a valid email format.");
      return;
    }

    setErrorText("");
    setIsSubmitting(true); 
    // Allowing the browser to process the action="https://formsubmit.co/..." natively now
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        
        <div className="section-header center">
          <div className="badge">Get in Touch</div>
          <h2 className="section-title">
            Let's build something <span className="text-gradient">extraordinary.</span>
          </h2>
        </div>

        <div className="contact-grid">
          
          {/* Left Panel: Contact Info */}
          <div className="contact-info-panel glass-panel">
            <div className="contact-profile-header">
              <img src="/footer-logo.png" alt="OriginN Logo" className="profile-logo" onError={(e) => {
                e.currentTarget.style.display = 'none';
              }} />
              <span className="profile-name">OriginN</span>
            </div>
            <h3 className="contact-panel-title">Contact Info</h3>
            
            <div className="contact-details-list">
              <div className="contact-detail-row">
                <MapPin size={20} className="detail-icon" />
                <span>Remote, India</span>
              </div>
              <a href="mailto:originnwebservices@gmail.com" className="contact-detail-row link">
                <Mail size={20} className="detail-icon" />
                <span>originnwebservices@gmail.com</span>
              </a>
              <a href="tel:+918368530707" className="contact-detail-row link">
                <Phone size={20} className="detail-icon" />
                <span>+91 83685 30707</span>
              </a>
              <a href="/BROCHURE_ORIGINN.jpg" download="OriginN_Brochure.jpg" target="_blank" rel="noreferrer" className="contact-detail-row link">
                <FileText size={20} className="detail-icon" />
                <span>Download Brochure</span>
              </a>
            </div>

            <div className="contact-social-pills">
              <a href="https://linkedin.com/company/originnservices" target="_blank" rel="noreferrer" className="social-pill">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://wa.me/918368530707" target="_blank" rel="noreferrer" className="social-pill">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href="mailto:originnwebservices@gmail.com" className="social-pill">
                <Mail size={18} /> Email Us
              </a>
              <button 
                type="button"
                className="social-pill" 
                onClick={(e) => {
                  e.preventDefault();
                  const shareText = "Hey! 👋\nI recently came across Originn Web Services - they build modern websites, portfolios, and digital solutions.\nIf you're looking to grow your online presence, definitely check them out:\n🌐 https://www.originn.online/";
                  if (navigator.share) {
                    navigator.share({ title: 'Originn Web Services', text: shareText });
                  } else {
                    navigator.clipboard.writeText(shareText);
                    alert('Recommendation message copied to your clipboard!');
                  }
                }}
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', fontFamily: 'inherit', color: 'var(--text-primary)' }}
              >
                <Share2 size={18} /> Refer Us
              </button>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="contact-form-panel glass-panel">
            <form action="https://formsubmit.co/originnwebservices@gmail.com" method="POST" className="contact-form-inner" onSubmit={handleSubmit}>
              
              {/* FormSubmit Security & Routing Configuration */}
              <input type="hidden" name="_subject" value="New Project Inquiry from OriginN Website!" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_next" value={`${window.location.origin}?submitted=true#contact`} />
              <input type="text" name="_honey" style={{ display: 'none' }} />

              {/* Inline Form Validation Error Component */}
              {errorText && (
                <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '12px 16px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '12px', color: '#fca5a5' }}>
                  <AlertCircle size={20} />
                  <span style={{ fontSize: '0.95rem' }}>{errorText}</span>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">YOUR NAME</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">PHONE NUMBER</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">SERVICE OF INTEREST</label>
                  <select id="service" name="service" required defaultValue="">
                    <option value="" disabled>Select a Service</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Portfolio Development">Portfolio Development</option>
                    <option value="Domain Helping">Domain Helping</option>
                    <option value="Logo Building">Logo Building</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label htmlFor="plan">PRICING PLAN</label>
                <select id="plan" name="plan" required defaultValue="">
                  <option value="" disabled>Select a Plan</option>
                  
                  <option value="" disabled>── Website Development ──</option>
                  <option value="WebPro (₹4,999)">WebPro (₹4,999)</option>
                  <option value="WebUltra (₹7,499)">WebUltra (₹7,499)</option>
                  
                  <option value="" disabled>── Portfolio Development ──</option>
                  <option value="PortfolioPro (₹2,999)">PortfolioPro (₹2,999)</option>
                  <option value="PortfolioUltra (₹5,999)">PortfolioUltra (₹5,999)</option>
                  
                  <option value="" disabled>── Logo Branding ──</option>
                  <option value="LogoPro (₹499)">LogoPro (₹499)</option>
                  <option value="LogoUltra (₹799)">LogoUltra (₹799)</option>
                  
                  <option value="" disabled>── Other ──</option>
                  <option value="Custom / Unsure">Custom / Unsure</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label htmlFor="refCode">REFER BY SOMEONE <span style={{fontSize: '0.7rem', opacity: 0.6, fontWeight: 400, marginLeft: '6px', textTransform: 'none'}}>(optional)</span></label>
                <input type="text" id="refCode" name="referral_code" placeholder="Enter reference code" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea id="message" name="message" rows={5} placeholder="How can I help you architecture the future?" required></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn" disabled={isSubmitting || isSubmitted} style={{ opacity: isSubmitting ? 0.7 : 1, transition: 'all 0.3s ease' }}>
                {isSubmitting ? 'Transmitting...' : isSubmitted ? <><CheckCircle size={18} /> Transmission Sent!</> : <>Send Transmission <Send size={18} /></>}
              </button>
              
              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  Our technical team will contact you shortly.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', opacity: 0.8, filter: 'drop-shadow(0 0 12px var(--accent-purple))' }}>
                  <Mail size={28} color="var(--accent-purple)" />
                </div>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
