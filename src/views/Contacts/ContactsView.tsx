import React from 'react';
import * as IconsIo5 from 'react-icons/io5';
import HeaderPage from '../../components/HeaderPage/HeaderPage';
import './Contacts.css';
import FormContact from './components/FormContact/FormContact';

const ContactsView: React.FC = () => (
  <div className="class-contacts-root">
    <div className="class-contacts-container-header">
      <HeaderPage
        title="CONTACTOS"
        subtitle="Ubicanos en nuestras instalaciones,
      llamanos o enviamos un mensaje."
      />
    </div>
    <div className="class-container-form-map">
      <div className="container">
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
      <div className="class-container-info">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
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
                  info@puntobid.com
                </span>
              </div>
              <div className="class-container-item-info">
                <div className="class-container-icon">
                  <IconsIo5.IoCallOutline fontSize={30} />
                </div>
                <span>
                  0983819961 - 022 436980
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactsView;
