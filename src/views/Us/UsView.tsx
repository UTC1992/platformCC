import React from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage';
import './Us.css';
import Img1 from '../../asset/resource/IMG-002.jpg';

const UsView: React.FC = () => (
  <div className="class-us-root">
    <HeaderPage
      title="NOSOTROS"
      subtitle="Nos preocupamos por darte un buén
      servicio y lograr una compra satisfactoria."
    />
    <div className="container class-us-row-1">
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <div className="">
            <h1>Nuestra Empresa</h1>
            <h4>Subastas online</h4>
            <p>
              Punto BID, empresa nacional dedicada a la subasta de bienes,
              equipos industriales, maquinas, propiedades y cualquier tipo
              de activo corporativo con una modalidad de pujas abiertas en
              linea desde nuestro portal www.puntobid.com
            </p>
            <p>
              Asesoramos y generamos valor a nuestros clientes
              (Grandes, medianas y pequeñas empresas) según sus
              necesidades, competencia y metas.
            </p>
            <p>
              Planificamos estrategias avanzadas que ayuden a
              nuestros clientes en la recuperación de inversión,
              con la venta de sus activos que salieron a producción.
            </p>
          </div>
        </div>
        <div className="col col-lg-4">
          METRICAS
        </div>
      </div>
    </div>
    <div className="class-us-line-bottom" />
    <img src={Img1} alt="" className="class-us-image1" />
  </div>
);

export default UsView;
