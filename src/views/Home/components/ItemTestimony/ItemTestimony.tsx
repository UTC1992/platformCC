import React from 'react';
import * as IconsFa from 'react-icons/fa';
import * as IconsBs from 'react-icons/bs';
import './ItemTestimony.css';

interface IProps {
  image: any;
  username: string;
  comment: string;
  priceBase: string;
  priceSale: string;
}

const ItemTestimony: React.FC<IProps> = ( props ) => {
  const {
    image, username, comment, priceBase, priceSale,
  } = props;
  return (
    <div className="class-item-testimony-root">
      <div>
        <img src={image} alt="" className="class-item-testimony-image" />
        <div className="class-item-testimony-line" />
      </div>
      <div className="class-item-testimony-row">
        <IconsFa.FaUserCircle fontSize="25" />
        <span>{username}</span>
      </div>
      <div className="class-item-testimony-comment">
        <span className="class-item-testimony-comment-text">
          {`"${comment}"`}
        </span>
      </div>
      <div className="class-item-testimony-line-2" />
      <div className="class-item-testimony-calification">
        CALIFICACIÓN
        <div className="class-item-testimony-star-content">
          <IconsBs.BsFillStarFill fontSize="30" />
          <IconsBs.BsFillStarFill fontSize="30" />
          <IconsBs.BsFillStarFill fontSize="30" />
          <IconsBs.BsFillStarFill fontSize="30" />
          <IconsBs.BsFillStarFill fontSize="30" />
        </div>
      </div>
      <div className="class-item-testimony-footer">
        <div className="class-item-testimony-column">
          <span>Precio Base</span>
          <span>{priceBase}</span>
        </div>
        <div className="class-item-testimony-column">
          <span>Precio Venta</span>
          <span>{priceSale}</span>
        </div>
      </div>
      <div className="class-item-testimony-row">
        <div className="class-item-testimony-content-play">
          <IconsFa.FaPlayCircle fontSize="25" />
        </div>
      </div>
    </div>
  );
};
export default ItemTestimony;
