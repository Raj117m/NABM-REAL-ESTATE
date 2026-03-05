import { Link, useLocation } from 'react-router-dom';
import { Search, FileText, Phone, Layers } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          <div>
            <div className="brand-name">ReBuilt</div>
            <div className="brand-sub">Redevelopment Specialists · Mumbai</div>
          </div>
        </Link>
        <ul className="navbar-links">
          <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}><Layers size={13} />Overview</Link></li>
          <li><Link to="/process" className={`nav-link ${isActive('/process') ? 'active' : ''}`}><FileText size={13} />Our Process</Link></li>
          <li><Link to="/finder" className={`nav-link ${isActive('/finder') ? 'active' : ''}`}><Search size={13} />Projects</Link></li>
          <li><a href="/#business-model" className="nav-link"><Layers size={13} />Business Model</a></li>
          <li><Link to="/contact" className={`nav-link nav-cta ${isActive('/contact') ? 'active' : ''}`}><Phone size={13} />Partner With Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}
