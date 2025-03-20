import {Dimensions,} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
  
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = size => (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;



const strokeWidth = 1.5; 
const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;

const adjustment = 30; 

const adjustedWidth = width - (adjustment * scaleWidth);
const adjustedHeight = height - (adjustment * scaleHeight);

const rectWidth = adjustedWidth - strokeWidth;
const rectHeight = adjustedHeight - strokeWidth;

export const sizeConfig = {
  sl: scale,
  vs: verticalScale,
  ms: moderateScale,
  mvs: moderateVerticalScale,
  wh: width,
  ht: height,
  rectWidth:rectWidth,
  rectHeight:rectHeight,
  strokeWidth:strokeWidth

};
