import { Link, useLocation } from 'react-router-dom';
import { Search, Phone, Layers, Activity, Shield, FileCheck } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          <img src="/logo.svg" alt="Crystal Developers Logo" className="nav-logo-img" />
          <div className="nav-brand-text">
            <div className="brand-name">Crystal Developers</div>
            <div className="brand-sub">Redevelopment Specialists · Mumbai</div>
          </div>
        </Link>
        <ul className="navbar-links">
          <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}><Layers size={13} />Overview</Link></li>
          <li><Link to="/finder" className={`nav-link ${isActive('/finder') ? 'active' : ''}`}><Search size={13} />Projects</Link></li>
          <li><Link to="/tracker" className={`nav-link ${isActive('/tracker') ? 'active' : ''}`}><Activity size={13} />Tracker</Link></li>
          <li><Link to="/funds" className={`nav-link ${isActive('/funds') ? 'active' : ''}`}><Shield size={13} />Compliance</Link></li>
          <li><Link to="/feasibility" className={`nav-link ${isActive('/feasibility') ? 'active' : ''}`}><FileCheck size={13} />Feasibility</Link></li>
          <li><Link to="/contact" className={`nav-link nav-cta ${isActive('/contact') ? 'active' : ''}`}><Phone size={13} />Partner</Link></li>
        </ul>
      </div>
    </nav>
  );
}
