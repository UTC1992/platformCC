import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import * as IconM from '@material-ui/icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselCustomStyles from './CarouselCustomStyles';

interface IProps {
  children: JSX.Element[];
}

const CarouselCustom: React.FC<IProps> = ( props ) => {
  const classes = CarouselCustomStyles();
  const { children } = props;
  const [currentSlide, setCurrentSlide] = useState<number>( 0 );

  const next = ( index: number ): void => {
    setCurrentSlide( index );
  };

  // const prev = (): void => {
  //   setCurrentSlide( currentSlide - 1 );
  // };

  const updateCurrentSlide = ( index: number ): void => {
    if ( currentSlide !== index ) {
      setCurrentSlide( index );
    }
  };

  return (
    <div className={classes.root}>
      <Carousel
        autoPlay
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        className={classes.carousel}
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
      >
        {children}
      </Carousel>
      <div className={classes.containerDots}>
        {
          children.map(( item: any, i: number ) => (
            <Box onClick={() => next( i )} key={i.toString()}>
              <IconM.FiberManualRecord className={classes.dots} />
            </Box>
          ))
        }
      </div>
    </div>
  );
};

export default CarouselCustom;
