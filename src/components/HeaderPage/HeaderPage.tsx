import React from 'react';
import './HeaderPage.css';

interface IProps {
  title: string;
  subtitle: string;
}

const HeaderPage: React.FC<IProps> = ( props ) => {
  const { title, subtitle } = props;

  return (
    <div>
      <div className="class-header-page-root">
        <h1 className="class-header-page-title">{title}</h1>
        <h6 className="class-header-page-subtitle">{subtitle}</h6>
      </div>
      <div className="class-header-line-bottom" />
    </div>
  );
};
export default HeaderPage;
