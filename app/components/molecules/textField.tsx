import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState} from 'react';
import {sizeConfig} from '@utils/sizeConfig';
import {InputField, PrimaryText, SecondaryText} from '@atoms/index';
import {Colors} from '@theme/colors';
import {Invalid} from '@vectors/vectorImages';


const TextField = ({
  handleChange,
  currentValue,
  placeholder,
  inputType,
  inputStyle,
  holderColor,
  label,
  noborder,
  error,
  autofocus,
  max,
  focus,
  isnew,
  isPass
}) => {
  const {vs, ms} = sizeConfig;
  const [isFocus, setIsFocus] = useState(focus);

  console.log(noborder, isFocus, error, 'TextInput Inline Validation');
  return (
    <View>
      <View>{label && <PrimaryText style={"font-fsm text-grayv2"} size={14} content={label} />}</View>
      <View
        className={``
         }>
        <View
          className={`bg-w flex-row w-full  ${
            error ? 'border-b-[#fda28b]' : 'border-b-grayv3'
          }  border-b-[1px]`}
          style={{height: vs(38), width: '100%'}}>
          <View className="flex-1 bg-white" style={{paddingRight: ms(0)}}>
            <InputField
              {...{
                max: max,
                autofocus,
                handleChange,
                currentValue,
                placeholder: placeholder,
                inputType: inputType || 'default',
                inputStyle: inputStyle,
                holderColor: holderColor || Colors.gy,
                isFocus,
                setIsFocus,
                inputStyle: {
                  // paddingHorizontal: vs(10),
                  height: '100%',
                },
              }}
            />
          </View>
          {error && !isnew && (
            <View className="absolute right-5 top-0 h-full justify-center">
              <Invalid />
            </View>
          )}
          {isnew && (
            <View
              style={{width: vs(35)}}
              className="absolute right-0 items-center  top-0 h-full border-l-[1px] border-l-[#FDE6E6] justify-center">
              <Text className="font-m2 text-bv2" style={{fontSize: vs(11)}}>
                KM
              </Text>
            </View>
          )}

         

          
        </View>
      </View>
      {error && (
        <View className=" px-1 py-1">
          <Text className=" font-inm text-r ">{error}</Text>
        </View>
      )}

{isPass &&  <TouchableOpacity className='items-end' style={{paddingTop:vs(10)}}>
  <SecondaryText style={"font-fm text-secondary "} size={13} content={"Forget Password?"}/>
      </TouchableOpacity>}
    </View>
  );
};

export default TextField;
