import { makeStyles } from '@material-ui/core';

const CarouselCustomStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  carousel: {
    padding: 0,
    height: 200,
  },
  containerDots: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  dots: {
    color: '#6D8392',
  },
}));

export default CarouselCustomStyles;
