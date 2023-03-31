import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const SIZES = {
  //base sizes
  base: 8,
  radius: 12,
  font: 14,
  padding: 24,

  //Fonts sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  //Dimensions
  height,
  width,
};

export default SIZES;
