import React from 'react';
import * as IconsFa from 'react-icons/fa';
import './ItemOfert.css';

interface IProps {
  image: any;
  title: string;
  subtitle: string;
  price: string;
}

const ItemOfert: React.FC<IProps> = ( props ) => {
  const {
    image, title, subtitle, price,
  } = props;

  return (
    <div className="class-item-ofert-root">
      <img src={image} alt="" className="class-item-ofert-image" />
      <span>{title}</span>
      <span>{subtitle}</span>
      <div className="class-item-ofert-button">
        SUBASTAR
      </div>
      <div className="class-item-ofert-footer">
        <span>{price}</span>
        <div className="class-item-ofert-icon-round">
          <IconsFa.FaHeart fontSize="20" />
        </div>
      </div>
    </div>
  );
};

export default ItemOfert;
