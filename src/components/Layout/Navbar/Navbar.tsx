import React from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../../asset/resource/svg/ICN-002.svg';
import LogoIcon from '../../../asset/resource/svg/ICN-001.svg';
import './Navbar.css';

const Navbar: React.FC = () => (
  <nav className="class-navbar-container
  navbar navbar-expand-sm navbar-light fixed-top"
  >
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        <div className="class-navbar-logo-icon">
          <img src={LogoIcon} alt="" />
        </div>
      </Link>
      <Link to="/" className="navbar-brand">
        TESTIMONIOS
      </Link>
      <Link to="/nosotros" className="navbar-brand">
        NOSOTROS
      </Link>
      <Link to="/contactos" className="navbar-brand">
        CONTACTOS
      </Link>
      <Link to="/" className="navbar-brand">
        <div className="class-navbar-profile-icon">
          <img src={ProfileIcon} alt="" />
        </div>
      </Link>
    </div>
  </nav>
);

export default Navbar;
