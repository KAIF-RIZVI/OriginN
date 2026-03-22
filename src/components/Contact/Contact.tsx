import { useState } from 'react';
import { Send, Mail, Phone, Linkedin, MapPin, FileText, MessageCircle, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    formData.append('_subject', 'New Project Inquiry from OriginN Website!');
    formData.append('_captcha', 'false');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/kaiferizvi2006@gmail.com", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Transmission failed. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
              <a href="mailto:kaiferizvi2006@gmail.com" className="contact-detail-row link">
                <Mail size={20} className="detail-icon" />
                <span>kaiferizvi2006@gmail.com</span>
              </a>
              <a href="tel:+918368530707" className="contact-detail-row link">
                <Phone size={20} className="detail-icon" />
                <span>+91 83685 30707</span>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="contact-detail-row link">
                <FileText size={20} className="detail-icon" />
                <span>Download Brochure</span>
              </a>
            </div>

            <div className="contact-social-pills">
              <a href="https://www.linkedin.com/in/mohdkaifrizvi" target="_blank" rel="noreferrer" className="social-pill">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://wa.me/918368530707" target="_blank" rel="noreferrer" className="social-pill">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href="mailto:kaiferizvi2006@gmail.com" className="social-pill">
                <Mail size={18} /> Email Me
              </a>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="contact-form-panel glass-panel">
            <form className="contact-form-inner" onSubmit={handleSubmit}>
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
              
              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea id="message" name="message" rows={5} placeholder="How can I help you architecture the future?" required></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn" disabled={isSubmitting || isSubmitted} style={{ opacity: isSubmitting ? 0.7 : 1, transition: 'all 0.3s ease' }}>
                {isSubmitting ? 'Transmitting...' : isSubmitted ? <><CheckCircle size={18} /> Transmission Sent!</> : <>Send Transmission <Send size={18} /></>}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
