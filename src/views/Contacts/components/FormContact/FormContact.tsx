import React from 'react';
import './FormContact.css';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';

const FormContact: React.FC = () => (
  <div className="class-form-root">
    <Input placeholder="Nombre" />
    <Input placeholder="E-mail" />
    <Input placeholder="Teléfono" />
    <textarea
      className="form-control"
      placeholder="Mensaje"
      id="floatingTextarea"
      rows={10}
    />
    <Button primary title="ENVIAR" />
  </div>
);

export default FormContact;
