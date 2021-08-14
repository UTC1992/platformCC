import React from 'react';
import './Button.css';

interface IProps {
  title: string;
  primary?: boolean;
}

const Button: React.FC<IProps> = ( props ) => {
  const { title, primary } = props;
  return (
    <button
      className={`class-button-root 
      ${primary ? 'class-button-blue' : 'class-button-white'}`}
      type="button"
    >
      {title}
    </button>
  );
};

export default Button;
