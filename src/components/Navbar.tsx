import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Shield, Info, Phone } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          <Shield size={24} className="navbar-logo" />
          <span className="navbar-title">ReBuilt</span>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              <Home size={18} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/process" className={`nav-link ${isActive('/process') ? 'active' : ''}`}>
              <Info size={18} />
              Process
            </Link>
          </li>
          <li>
            <Link to="/business-model" className={`nav-link ${isActive('/business-model') ? 'active' : ''}`}>
              <Info size={18} />
              Model Concept
            </Link>
          </li>
          <li>
            <Link to="/finder" className={`nav-link ${isActive('/finder') ? 'active' : ''}`}>
              <Search size={18} />
              Find Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              <Phone size={18} />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
