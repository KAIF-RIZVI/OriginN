import { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './ClientPortal.css';

const ClientPortal = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user successfully returned from FormSubmit Captcha wrapper
    if (window.location.search.includes('submitted=true')) {
      setIsSubmitted(true);
      window.history.replaceState({}, document.title, window.location.pathname);
      setTimeout(() => setIsSubmitted(false), 8000);
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    // We do NOT preventDefault() because we must POST natively to formsubmit.co
    setIsSubmitting(true);
  };

  return (
    <div className="portal-page">
      <div className="container">
        
        <div className="portal-header">
          <h1 className="portal-title">Client <span className="text-gradient">Portal</span></h1>
          <p className="portal-subtitle">
            Welcome to the OriginN project onboarding. Please provide as much detail as possible about your vision so we can perfectly tailor the architecture to your needs.
          </p>
        </div>

        <div className="portal-form-container glass-panel">
          {isSubmitted && (
            <div className="success-banner">
              <CheckCircle className="success-icon" size={24} />
              <div className="success-content">
                <h3>Project Brief Received Successfully!</h3>
                <p>We'll review your details and be in touch shortly to kick off the next stage.</p>
              </div>
            </div>
          )}

          <form action="https://formsubmit.co/originnwebservices@gmail.com" method="POST" className="portal-form" onSubmit={handleSubmit}>
            
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Client Portal Submission" />
            <input type="hidden" name="_template" value="table" />
            {/* Redirect back to Portal with ?submitted=true */}
            <input type="hidden" name="_next" value={window.location.origin + '/client-portal?submitted=true'} />
            
            {/* Section 1: Basic Info */}
            <div className="form-section">
              <h2 className="section-title">1. Your Details</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            {/* Section 2: Core Overview */}
            <div className="form-section">
              <h2 className="section-title">2. Core Overview</h2>
              <div className="form-group">
                <label htmlFor="purpose">What is the purpose of the application? *</label>
                <textarea 
                  id="purpose" 
                  name="What is the purpose of the application?" 
                  required 
                  placeholder="E.g., An e-commerce site for selling physical goods, a blog for sharing photography, an AI tool for generating text..."
                  rows={3}
                ></textarea>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="references">Do you have any reference apps or websites in mind?</label>
                <input 
                  type="text" 
                  id="references" 
                  name="Reference apps or websites" 
                  placeholder="https://example.com, https://dribbble.com/..."
                />
              </div>
            </div>

            {/* Section 3: Technical Needs */}
            <div className="form-section">
              <h2 className="section-title">3. Technical & Feature Needs</h2>
              <div className="form-group">
                <label htmlFor="features">What features do you need? (login, dashboard, payments, etc.) *</label>
                <textarea 
                  id="features" 
                  name="What features do you need?" 
                  required 
                  placeholder="E.g., User authentication, Stripe payment integration, live chat, an admin dashboard..."
                  rows={4}
                ></textarea>
              </div>
            </div>

            {/* Section 4: Detailed Description */}
            <div className="form-section">
              <h2 className="section-title">4. Deep Dive</h2>
              <div className="form-group">
                <label htmlFor="description">
                  Describe your project in as much detail as possible. (is it a portfolio, website etc.) *
                </label>
                <p className="field-hint">
                  This will not be permanent, you will be able to make changes and provide feedback through the process.
                </p>
                <textarea 
                  id="description" 
                  name="Detailed Description" 
                  required 
                  placeholder="Explain your vision from end to end. Who is the target audience? What problem does this solve? Feel free to write as much as you need."
                  rows={6}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Processing... <span className="spinner"></span></>
              ) : (
                <>Submit Project Brief <ArrowRight size={20} /></>
              )}
            </button>
            <p className="privacy-note">
              By submitting this form via Form, you agree to our OriginN privacy policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
