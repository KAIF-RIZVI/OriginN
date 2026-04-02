import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Terms from './pages/Terms';
import ClientPortal from './pages/ClientPortal';
import HelpSupport from './pages/HelpSupport';
import { LayoutDashboard } from 'lucide-react';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/client-portal" element={<ClientPortal />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      
      {/* Floating Status Badge */}
      <div className="status-badge">
        <div className="status-dot"></div>
        Currently accepting projects
      </div>

      <footer className="app-footer" style={{ flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <Link 
          to="/client-portal" 
          className="portal-btn"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '10px 20px', 
            borderRadius: '100px', 
            background: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            transition: 'all var(--transition-fast)',
            marginBottom: '-12px',
            zIndex: 10
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <LayoutDashboard size={18} />
          Client Portal
        </Link>
        <div className="footer-pill glass-panel">
          <img src="/footer-logo.png" alt="OriginN Logo" className="footer-logo" onError={(e) => e.currentTarget.style.display = 'none'} />
          <span className="footer-text">
            Made with love <span className="heart">❤️</span> by <span className="footer-brand">ORIGINN</span>
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link to="/help" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color='var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color='var(--text-secondary)'}>
              Help & Support
            </Link>
            <Link to="/terms" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color='var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color='var(--text-secondary)'}>
              Terms & Conditions
            </Link>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', opacity: 0.6, letterSpacing: '0.05em' }}>
            &copy; 2026 ORIGINN. All rights reserved.
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
