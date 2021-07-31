import React from 'react';
import * as IconsFa from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => (
  <div className="class-footer-root">
    <div className="class-footer-row-1">
      <IconsFa.FaFacebookF fontSize="80" />
      <IconsFa.FaInstagram fontSize="80" />
      <IconsFa.FaTwitter fontSize="80" />
      <IconsFa.FaWhatsapp fontSize="80" />
    </div>
    <div className="class-footer-row-2">
      <p className="class-footer-paragraph">
        Descubre por que somos la mejor
        plataforma de subastas que necesitas.
      </p>
      <div className="class-footer-button">
        ACCEDER
      </div>
    </div>
    <div className="class-footer-row-3">
      <span>COPYRIGHT</span>
      <IconsFa.FaRegCopyright fontSize="20" />
      <span>PUNTOBID INC. | TODOS LOS DERECHOS RESERVADOS</span>
    </div>
  </div>
);

export default Footer;
