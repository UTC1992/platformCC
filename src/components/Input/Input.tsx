import React from 'react';
import './Input.css';

interface IProps {
  placeholder?: string;
}

const Input: React.FC<IProps> = ( props ) => {
  const { placeholder = '' } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      aria-label="First name"
      className="form-control class-input-root"
    />
  );
};

export default Input;
