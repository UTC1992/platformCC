import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  subtitle: string;
  titlelink: string;
}

const HeaderOfert: React.FC<IProps> = ( props ) => {
  const { title, subtitle, titlelink } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <div>{title}</div>
          <div>{subtitle}</div>
        </div>
        <div className="col-2">
          <Link to="/">
            <span>{titlelink}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeaderOfert;
