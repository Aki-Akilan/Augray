import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';

const CustomImage = memo(({source, style,mode}) => {
  return <FastImage {...{source, style}} resizeMode={mode || "contain"} />;
});

export default CustomImage;
