import React from 'react';

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
        <div className="col-8">
          <div>{title}</div>
          <div>{subtitle}</div>
        </div>
        <div className="col-4">
          <span>{titlelink}</span>
        </div>
      </div>
    </div>
  );
};
export default HeaderOfert;
