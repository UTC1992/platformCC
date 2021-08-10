import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => (
  <nav className="class-navbar-container
  navbar navbar-expand-sm navbar-light fixed-top"
  >
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        Logo
      </Link>
      <Link to="/" className="navbar-brand">
        Testimonios
      </Link>
      <Link to="/nosotros" className="navbar-brand">
        Nosotros
      </Link>
      <Link to="/contactos" className="navbar-brand">
        Contactos
      </Link>
      <Link to="/" className="navbar-brand">
        Icon User
      </Link>
    </div>
  </nav>
);

export default Navbar;
