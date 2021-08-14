import React from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage';
import './Us.css';
import Img1 from '../../asset/resource/IMG-002.jpg';
import Md1 from '../../asset/resource/svg/MD-001.svg';
import Md2 from '../../asset/resource/svg/MD-002.svg';
import Md3 from '../../asset/resource/svg/MD-003.svg';
import Md4 from '../../asset/resource/svg/MD-004.svg';

const UsView: React.FC = () => (
  <div className="class-us-root">
    <div className="class-us-container-header">
      <HeaderPage
        title="NOSOTROS"
        subtitle="Nos preocupamos por darte un buén
      servicio y lograr una compra satisfactoria."
      />
    </div>
    <div className="class-us-row-1">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-8">
            <h1 className="class-us-text-title">Nuestra Empresa</h1>
            <br />
            <br />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col col-lg-4">
            <div className="">
              <h4 className="class-us-text-subtitle">Subastas online</h4>
              <br />
              <p className="class-us-paragraph">
                Punto BID, empresa nacional dedicada a la subasta de bienes,
                equipos industriales, maquinas, propiedades y cualquier tipo
                de activo corporativo con una modalidad de pujas abiertas en
                linea desde nuestro portal www.puntobid.com
              </p>
              <p className="class-us-paragraph">
                Asesoramos y generamos valor a nuestros clientes
                (Grandes, medianas y pequeñas empresas) según sus
                necesidades, competencia y metas.
              </p>
              <p className="class-us-paragraph">
                Planificamos estrategias avanzadas que ayuden a
                nuestros clientes en la recuperación de inversión,
                con la venta de sus activos que salieron a producción.
              </p>
            </div>
          </div>
          <div className="col col-lg-4">
            <br />
            <br />
            <br />
            <br />
            <div className="class-us-row-item-bar">
              <span>PASIÓN</span>
              <img src={Md1} alt="" className="class-us-item-bar-img" />
            </div>
            <div className="class-us-row-item-bar">
              <span>INNOVACIÓN</span>
              <img src={Md2} alt="" className="class-us-item-bar-img" />
            </div>
            <div className="class-us-row-item-bar">
              <span>TRANSPARENCIA</span>
              <img src={Md3} alt="" className="class-us-item-bar-img" />
            </div>
            <div className="class-us-row-item-bar">
              <span>EXCELENCIA</span>
              <img src={Md4} alt="" className="class-us-item-bar-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="class-us-line-bottom" />
    <img src={Img1} alt="" className="class-us-image1" />
  </div>
);

export default UsView;
