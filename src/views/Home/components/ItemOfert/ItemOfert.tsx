import React from 'react';
import * as IconsFa from 'react-icons/fa';
import './ItemOfert.css';

interface IProps {
  image: any;
  title: string;
  subtitle: string;
  price: string;
  available?: boolean;
}

const ItemOfert: React.FC<IProps> = ( props ) => {
  const {
    image, title, subtitle, price, available,
  } = props;

  return (
    <div className={`class-item-ofert-root
     ${available
      ? 'class-item-ofer-bottom-available'
      : 'class-item-ofer-bottom-not-available'}`}
    >
      <img src={image} alt="" className="class-item-ofert-image" />
      <div className="class-item-ofert-info">
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
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
