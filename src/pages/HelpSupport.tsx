import { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronRight, Mail, Clock, Users, ShieldCheck, HelpCircle, CheckCircle } from 'lucide-react';
import './HelpSupport.css';

// --- DATA STRUCTURES ---

const faqData = [
  {
    category: "General Questions",
    items: [
      { q: "What services does Originn offer?", a: "Originn delivers high-performance digital solutions, including website development, portfolio development (design), and scalable web applications. We focus on creating modern, conversion-driven platforms tailored to your specific business goals." },
      { q: "Who can work with Originn?", a: "Originn works with startups, growing businesses, and individuals looking to establish a strong and effective online presence." },
      { q: "How do I get started?", a: "Getting started is simple. Share your requirements through the “Start Project” option, and we’ll review your needs, define the scope, and begin with a structured onboarding process." }
    ]
  },
  {
    category: "Pricing & Packages",
    items: [
      { q: "What are your pricing plans?", a: "We offer structured pricing starting at ₹4,999 for static websites and ₹14,999 for dynamic, feature-rich applications." },
      { q: "What is included in each package?", a: "Each package includes design, development, and essential features required to launch your website or application. The exact deliverables vary based on the selected plan and project requirements." },
      { q: "Are there any hidden charges?", a: "Absolutely not. Transparency is our priority—you only pay the agreed amount, unless you request changes or scope expansions during development." },
      { q: "Can I get a custom quote?", a: "Yes. We offer custom solutions based on your specific requirements, scope, and objectives. Share your needs, and we’ll provide a tailored quote aligned with your goals." }
    ]
  },
  {
    category: "Project Process",
    items: [
      { q: "What is your development process?", a: "Our process follows a structured approach: Strategy Call → Architecture & Design → Development & Feedback → QA & Optimization → Final Launch" },
      { q: "How long does a project take?", a: "Most projects are delivered within 7 days. Timelines may extend depending on scope, revisions, or unforeseen constraints. Public holidays are excluded, and Originn reserves the right to adjust delivery timelines as necessary." },
      { q: "Will I get updates during development?", a: "Yes. We provide regular updates throughout the development process, allowing you to review progress and share feedback at key stages." },
      { q: "Do you offer revisions?", a: "Yes. Revisions are limited to refining the approved concept and are defined by the selected package. Any major changes to the original scope or direction may be declined or treated as additional work, subject to separate charges." }
    ]
  },
  {
    category: "Technical Support",
    items: [
      { q: "Do you provide post-delivery support?", a: "Yes. After delivery, you have up to 3 days to review your website and report any issues related to the delivered work within the defined scope. This does not constitute an ongoing maintenance commitment, and any additional requirements may require a separate engagement." },
      { q: "What if I face issues after delivery?", a: "If you encounter issues related to the delivered work, they will be addressed within the defined support scope. Requests beyond this scope or timeframe may require a separate engagement." },
      { q: "Do you offer maintenance services?", a: "No. Originn does not provide ongoing maintenance services. Any future support or updates require a separate agreement and are subject to availability." }
    ]
  },
  {
    category: "Payments & Refunds",
    items: [
      { q: "What payment methods do you accept?", a: "We accept standard digital payment methods. Specific payment details are shared during the onboarding process." },
      { q: "Is advance payment required?", a: "Yes. A 25% upfront advance is required to initiate the project, with the remaining 75% due upon completion prior to final delivery. The advance payment is non-refundable, and once the project has commenced, no refunds are provided." },
      { q: "When is the final delivery provided?", a: "Final delivery is provided only after the project is completed and full payment has been received." }
    ]
  },
  {
    category: "Contact & Escalation",
    items: [
      { q: "How can I contact Originn?", a: "We recommend reviewing the FAQs first, as most common queries are already answered. If you still need assistance, you can contact Originn through the Help & Support form available on the website. Additional communication channels may be shared during onboarding for active projects." },
      { q: "What is your response time?", a: "We respond as soon as possible, depending on availability, request complexity, and current workload." },
      { q: "How do I escalate urgent issues?", a: "For urgent issues, select “Urgent Escalation” in the Help & Support form. Additional contact options may be provided for critical cases, subject to availability." }
    ]
  }
];

export default function HelpSupport() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Process search filters
  const filteredData = faqData.map(category => {
    const matchedItems = category.items.filter(item => 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, items: matchedItems };
  }).filter(category => category.items.length > 0);

  const handleSubmit = () => {
    // Native formsubmit execution
    setIsSubmitting(true);
  };

  // Support Redirect Check
  useEffect(() => {
    if (window.location.search.includes('submitted=true')) {
      setIsSubmitted(true);
      window.history.replaceState({}, document.title, window.location.pathname);
      setTimeout(() => setIsSubmitted(false), 8000);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="help-page">
      {/* 1. HERO SECTION */}
      <div className="help-hero-wrapper">
        <div className="glow-orb orb-purple"></div>
        <div className="glow-orb orb-blue"></div>
        <section className="help-hero container">
          <h1 className="help-title">How can we <span className="text-gradient">help you?</span></h1>
          <p className="help-subtitle">Find fast answers below, or submit a request to our dedicated support team directly.</p>
        
        <div className="search-container">
          <Search size={22} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search for pricing, features, issues..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="help-search-input"
          />
        </div>
      </section>
      </div>

      {/* 2. FAQ ACCORDION SECTION */}
      <section className="faq-section container">
        {filteredData.length === 0 ? (
          <div className="no-results-box glass-panel">
            <HelpCircle size={40} opacity={0.5} />
            <h3>No results found for "{searchQuery}"</h3>
            <p>If you couldn't find your answer here, please submit a request below!</p>
          </div>
        ) : (
          filteredData.map((category, catIndex) => (
            <div key={catIndex} className="faq-category-block">
              <h2 className="faq-category-title">{category.category}</h2>
              <div className="accordion">
                {category.items.map((item, itemIndex) => {
                  const id = `cat-${catIndex}-item-${itemIndex}`;
                  const isOpen = openId === id;
                  return (
                    <div key={itemIndex} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                      <button className="accordion-trigger" onClick={() => toggleAccordion(id)}>
                        <span className="accordion-q">{item.q}</span>
                        <ChevronDown size={20} className={`accordion-chevron ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <div className="accordion-content-outer" style={{ maxHeight: isOpen ? '500px' : '0' }}>
                        <div className="accordion-content-inner">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </section>

      {/* 3. CONTACT SUPPORT FORM */}
      <section className="support-form-section container">
        <div className="form-card glass-panel">
          
          <div className="form-heading-side">
            <h2>Submit a <span className="text-gradient">Request</span></h2>
            <p>Our experts will be with you shortly. Please be as detailed as possible to expedite a solution.</p>
            
            <div className="support-options-pills mt-4">
              <a href="mailto:originnwebservices@gmail.com" className="pill-link"><Mail size={18}/> Email Us</a>
            </div>
          </div>
          
          <div className="form-input-side">
            {isSubmitted && (
              <div className="success-banner">
                <CheckCircle className="success-icon" size={24} />
                <div className="success-content">
                  <h3>Ticket Received!</h3>
                  <p>Our support engineers are actively reviewing your case under our 24-hour turnaround mandate.</p>
                </div>
              </div>
            )}
            
            <form action="https://formsubmit.co/originnwebservices@gmail.com" method="POST" className="ticket-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Urgent Support Ticket | Originn" />
              <input type="hidden" name="_next" value={window.location.origin + '/help?submitted=true'} />
              
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" required placeholder="Jane Doe" />
              </div>
              
              <div className="form-group">
                <label>Contact (Email or Phone)</label>
                <input type="text" name="contact" required placeholder="jane@example.com (or phone number)" />
              </div>
              
              <div className="form-group">
                <label>Issue Type</label>
                <div className="select-wrapper">
                  <select name="Issue Type" required defaultValue="">
                    <option value="" disabled>Select an issue category</option>
                    <option value="Billing & Pricing">Billing & Pricing</option>
                    <option value="Technical Support">Technical Support / Bug</option>
                    <option value="New Project Query">New Project Query</option>
                    <option value="Maintenance Request">Maintenance Request</option>
                    <option value="Urgent Escalation">Urgent Escalation (Site Down)</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Detailed Message</label>
                <textarea name="Message" required rows={4} placeholder="Describe your issue or query..."></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Send Request'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. LIVE SUPPORT CTA */}
      <section className="live-support-cta container">
        <h2 className="cta-heading">Still need help? Talk to our team now.</h2>
        <a href="mailto:originnwebservices@gmail.com" className="cta-action-button">
          Email Our Experts <ChevronRight size={20} />
        </a>
      </section>

      {/* 5. TRUST ELEMENTS */}
      <section className="trust-footer container">
        <div className="trust-item glass-panel">
          <div className="icon-wrapper">
            <Clock className="trust-icon" size={26} />
          </div>
          <h4>Quick Response</h4>
          <p>As soon as possible</p>
        </div>
        <div className="trust-item glass-panel">
          <div className="icon-wrapper">
            <Users className="trust-icon" size={26} />
          </div>
          <h4>Dedicated Team</h4>
          <p>Experts handling your queries</p>
        </div>
        <div className="trust-item glass-panel">
          <div className="icon-wrapper">
            <ShieldCheck className="trust-icon" size={26} />
          </div>
          <h4>Transparent Comms</h4>
          <p>No hidden charges, no surprises</p>
        </div>
      </section>
    </div>
  );
}
