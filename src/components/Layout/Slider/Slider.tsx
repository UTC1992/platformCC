import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';
import Image1 from '../../../asset/resource/IMG-001.jpg';
import Image2 from '../../../asset/resource/IMG-002.jpg';
import Image3 from '../../../asset/resource/IMG-003.jpg';
import Button from '../../Button/Button';

const Slider: React.FC = () => (
  <div className="class-slider-container">
    <Carousel className="">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="class-slider-content-item">
            <div>
              <div className="class-slider-item-title">
                <h2>SUBASTAS</h2>
                <h3>online</h3>
              </div>
              <h5 className="class-slider-item-subtitle">
                Satisfacción al comprar
              </h5>
              <p className="class-slider-item-paragrahp">
                Punto BID te brinda la oportunidad de disfrutar
                y ser participe de una experiencia agradable,
                mientras de una manera eficiente realizas una
                compra segura y confiable.
              </p>
            </div>
            <Button primary title="ACCEDER" />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="class-slider-content-item-2">
            <div className="class-slider-container-paragraph-2">
              <p className="class-slider-item-paragrahp-2">
                Servir a nuestros clientes con confianza,
                seriedad, transparencia, responsabilidad y
                calidad es lo que nos caracteriza como empresa.
              </p>
              <Button title="ACCEDER" />
            </div>
            <div>
              <div className="class-slider-item-title-2">
                <h2>SUBASTAS</h2>
                <h3>ONLINE</h3>
                <h3>PLATAFORMA</h3>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Slider;
