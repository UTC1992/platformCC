import React from 'react';
import * as IconsIo5 from 'react-icons/io5';
import HeaderPage from '../../components/HeaderPage/HeaderPage';
import './Contacts.css';
import FormContact from './components/FormContact/FormContact';

const ContactsView: React.FC = () => (
  <div className="class-contacts-root">
    <HeaderPage
      title="CONTACTOS"
      subtitle="Ubicanos en nuestras instalaciones,
      llamanos o enviamos un mensaje."
    />
    <div className="container class-container-form-map">
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <FormContact />
        </div>
        <div className="col col-lg-4">
          <div className="map">
            mapa
          </div>
        </div>
      </div>
    </div>
    <div className="container class-container-info">
      <div className="class-container-item-info">
        <div className="class-container-icon">
          <IconsIo5.IoLocationOutline fontSize={30} />
        </div>
        <span>
          Av. Los Shyris y Rio Coca,
          Edificio Alomia Oficina 03 Quito - Ecuador
        </span>
      </div>
      <div className="class-container-item-info">
        <div className="class-container-icon">
          <IconsIo5.IoMailOutline fontSize={30} />
        </div>
        <span>
          Av. Los Shyris y Rio Coca,
          Edificio Alomia Oficina 03 Quito - Ecuador
        </span>
      </div>
      <div className="class-container-item-info">
        <div className="class-container-icon">
          <IconsIo5.IoCallOutline fontSize={30} />
        </div>
        <span>
          Av. Los Shyris y Rio Coca,
          Edificio Alomia Oficina 03 Quito - Ecuador
        </span>
      </div>

    </div>
  </div>
);

export default ContactsView;
