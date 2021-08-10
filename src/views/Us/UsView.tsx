import React from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage';
import './Us.css';

const UsView: React.FC = () => (
  <div className="class-us-root">
    <HeaderPage
      title="NOSOTROS"
      subtitle="Nos preocupamos por darte un buén
      servicio y lograr una compra satisfactoria."
    />
    <div className="class-us-row-1">
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
    <div className="class-us-line-bottom" />
    <div className="class-us-row-1">
      <h1>Como comprar en</h1>
      <h1>PUNTO BID</h1>
    </div>
  </div>
);

export default UsView;
