import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {sizeConfig} from '@utils/sizeConfig';

const PrimaryText = memo(({style, size, content}) => {
  return (
    <Text className={style || 'font-fm text-secondary'} style={{fontSize: sizeConfig.ms(size || 14)}}>
      {content}
    </Text>
  );
});

export default PrimaryText;
