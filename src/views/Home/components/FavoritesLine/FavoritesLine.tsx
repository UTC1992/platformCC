import React from 'react';
import * as IconsFa from 'react-icons/fa';
import './FavoritesLine.css';

const FavoritesLine: React.FC = () => (
  <div className="class-favorite-line-root">
    <div className="class-favorite-content-column">
      <div className="class-favorite-circle-1">
        <div className="class-item-favorite-content">
          <IconsFa.FaHeart fontSize="30" />
        </div>
      </div>
      <span>FAVORITOS</span>
    </div>
    <div className="class-favorite-content-column">
      <div className="class-favorite-circle-1">
        <div className="class-item-favorite-content">
          <h4>END</h4>
        </div>
      </div>
      <span>FAVORITOS</span>
    </div>
  </div>
);

export default FavoritesLine;
