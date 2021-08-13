import React from 'react';
import './Button.css';

interface IProps {
  title: string;
}

const Button: React.FC<IProps> = ( props ) => {
  const { title } = props;
  return (
    <button
      className="btn class-button-root"
      type="button"
    >
      {title}
    </button>
  );
};

export default Button;
