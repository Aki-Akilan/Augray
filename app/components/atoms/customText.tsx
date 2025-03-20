import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {sizeConfig} from '@utils/sizeConfig';

const CustomText = memo(({style, size, content}) => {
  return (
    <Text className={style} style={{fontSize: sizeConfig.ms(size)}}>
      {content}
    </Text>
  );
});

export default CustomText;
