import { TextInput} from 'react-native';
import React, {memo} from 'react';
import {sizeConfig} from '@utils/sizeConfig';

const InputField = ({
  handleChange,
  currentValue,
  placeholder,
  inputType,
  inputStyle,
  holderColor,
  setIsFocus,
  autofocus,
  max,
}) => {
  console.log(currentValue, 'check input ');
  return (
    <TextInput
      autoFocus={autofocus}
      onFocus={() => {
        setIsFocus(true);
      }}
      onBlur={() => {
        setIsFocus(false);
      }}
      maxLength={max || null}
      onChangeText={handleChange}
      style={{
        fontFamily: 'OpenSans-Regular',
        letterSpacing: 1.5,
        fontSize: sizeConfig.ms(13),
        ...inputStyle,
        flex: 1,
      }}
      value={currentValue}
      placeholder={placeholder || ''}
      keyboardType={inputType || 'default'}
      placeholderTextColor={holderColor || ''}
    />
  );
};

export default memo(InputField);
