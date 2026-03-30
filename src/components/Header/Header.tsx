import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Menu, X, Rocket, Linkedin, Download, SunMedium, Moon } from 'lucide-react';
import './Header.css';

const XIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const local = localStorage.getItem('originn-theme');
    if (local === 'dark' || local === 'light') return local;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
    }
  }, [theme]);

  const cycleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('originn-theme', nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="OriginN Logo" className="brand-logo" onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallbacks = document.querySelectorAll('.logo-fallback');
            fallbacks.forEach(el => (el as HTMLElement).style.display = 'inline');
          }} />
          <span className="logo-fallback text-gradient" style={{ display: 'none' }}>Origin</span>
          <span className="logo-fallback logo-accent" style={{ display: 'none' }}>N</span>
        </Link>

        <nav className={`desktop-nav`}>
          <a href="/#services" className="nav-link">Services</a>
          <a href="/#work" className="nav-link">Our Work</a>
          <a href="/#pricing" className="nav-link">Pricing</a>
          <a href="/#about" className="nav-link">About</a>
        </nav>

        <div className="header-actions">
          <a href="https://x.com/originn68505" className="twitter-btn" aria-label="X (Twitter)" target="_blank" rel="noreferrer">
            <XIcon size={22} />
          </a>
          <a href="https://linkedin.com/company/originnservices" className="linkedin-btn" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:originnwebservices@gmail.com" className="gmail-btn" aria-label="Email">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
              alt="Gmail" 
              style={{ width: '20px', height: '20px' }} 
            />
          </a>
          <a href="/BROCHURE_ORIGINN.jpg" download="OriginN_Brochure.jpg" target="_blank" rel="noreferrer" className="brochure-btn">
            <Download size={18} />
            Brochure
          </a>
          <a href="#contact" className="btn btn-primary start-btn">
            <Rocket size={18} />
            Start Project
          </a>

          <button 
            className="theme-toggle-btn"
            onClick={cycleTheme}
            aria-label={`Toggle theme (Current: ${theme})`}
            title={`Theme: ${theme}`}
          >
            {theme === 'dark' ? <Moon size={20} /> : <SunMedium size={20} />}
          </button>
          
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="/#work" onClick={() => setMobileMenuOpen(false)}>Our Work</a>
          <a href="/#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="/#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="/BROCHURE_ORIGINN.jpg" download="OriginN_Brochure.jpg" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-purple)' }}>Download Brochure</a>
          <a href="/#contact" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>Start Project</a>
          
          <div className="mobile-socials" style={{ display: 'flex', gap: '16px', justifyContent: 'center', padding: '24px 0 0', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '24px' }}>
            <a href="https://x.com/originn68505" className="twitter-btn" aria-label="X (Twitter)" target="_blank" rel="noreferrer">
              <XIcon size={20} />
            </a>
            <a href="https://linkedin.com/company/originnservices" className="linkedin-btn" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:originnwebservices@gmail.com" className="gmail-btn" aria-label="Email">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" width="20" height="20" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
