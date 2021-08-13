import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';
import Image1 from '../../../asset/resource/IMG-001.jpg';
import Image2 from '../../../asset/resource/IMG-003.jpg';

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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus ma</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Slider;
