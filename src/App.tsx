import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Terms from './pages/Terms';
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
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      
      {/* Floating Status Badge */}
      <div className="status-badge">
        <div className="status-dot"></div>
        Currently accepting projects
      </div>

      <footer className="app-footer" style={{ flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <div className="footer-pill glass-panel">
          <img src="/footer-logo.png" alt="OriginN Logo" className="footer-logo" onError={(e) => e.currentTarget.style.display = 'none'} />
          <span className="footer-text">
            Made with love <span className="heart">❤️</span> by <span className="footer-brand">ORIGINN</span>
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <Link to="/terms" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color='var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color='var(--text-secondary)'}>
            Terms & Conditions
          </Link>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', opacity: 0.5, letterSpacing: '0.05em' }}>
            &copy; 2026 ORIGINN. All rights reserved.
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
