import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </main>
      
      {/* Floating Status Badge */}
      <div className="status-badge">
        <div className="status-dot"></div>
        Currently accepting projects
      </div>

      <footer className="app-footer">
        <div className="footer-pill glass-panel">
          <img src="/footer-logo.png" alt="OriginN Logo" className="footer-logo" onError={(e) => e.currentTarget.style.display = 'none'} />
          <span className="footer-text">
            Made with love <span className="heart">❤️</span> by <span className="footer-brand">ORIGINN</span>
          </span>
        </div>
      </footer>
    </Router>
  );
}

export default App;
