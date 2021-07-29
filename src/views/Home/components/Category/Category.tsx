import React from 'react';
import './Category.css';

interface IProps {
  image: any;
  title: string;
}

const Category: React.FC<IProps> = ( props ) => {
  const { image, title } = props;

  return (
    <div className="class-category-root">
      <img
        src={image}
        className="class-category-img"
        alt=""
      />
      <span>{title}</span>
    </div>
  );
};
export default Category;
