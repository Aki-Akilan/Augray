import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {sizeConfig} from '@utils/sizeConfig';

const SecondaryText = memo(({style, size, content}) => {
  return (
    <Text className={style || 'font-fm text-grayv1d'} style={{fontSize: sizeConfig.ms(size || 14)}}>
      {content}
    </Text>
  );
});

export default SecondaryText;
