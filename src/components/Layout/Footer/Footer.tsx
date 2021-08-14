import React from 'react';
import * as IconsFa from 'react-icons/fa';
import Red1 from '../../../asset/resource/svg/RD-001.svg';
import Red2 from '../../../asset/resource/svg/RD-002.svg';
import Red3 from '../../../asset/resource/svg/RD-003.svg';
import Red4 from '../../../asset/resource/svg/RD-004.svg';
import './Footer.css';

const Footer: React.FC = () => (
  <div className="class-footer-root">
    <div className="class-footer-row-1">
      <div className="class-footer-container-icon">
        <img src={Red1} alt="" />
      </div>
      <div className="class-footer-container-icon">
        <img src={Red2} alt="" />
      </div>
      <div className="class-footer-container-icon">
        <img src={Red3} alt="" />
      </div>
      <div className="class-footer-container-icon">
        <img src={Red4} alt="" />
      </div>
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
