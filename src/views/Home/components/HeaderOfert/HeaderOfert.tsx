import React from 'react';
import './HeaderOfert.css';

interface IProps {
  title: string;
  subtitle: string;
  titlelink: string;
}

const HeaderOfert: React.FC<IProps> = ( props ) => {
  const { title, subtitle, titlelink } = props;

  return (
    <div className="container">
      <div className="class-header-ofert-row">
        <div>
          <div>{title}</div>
          <div>{subtitle}</div>
        </div>
        <div>
          <span>{titlelink}</span>
        </div>
      </div>
    </div>
  );
};
export default HeaderOfert;
