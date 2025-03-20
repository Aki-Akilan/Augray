import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AddVectorIcon, MinusVectorIcon} from '@vectors/vectorImages';
import {sizeConfig} from '@utils/sizeConfig';
import {Images} from '@images/index';
import {CustomImage, PrimaryText} from '@atoms/index';
import {Colors} from '@theme/colors';
import {useAppDispatch} from '@hooks/index';

const QuantityPrice = ({details, type}) => {
  const {vs} = sizeConfig;
  const [price, setPrice] = useState(details?.price);
  const [quantity, setQuantity] = useState(details?.quantity);
  return (
    <View
      className="flex-row justify-between items-center"
      style={{paddingHorizontal: vs(20), paddingVertical: vs(20)}}>
      <View className="flex-row items-center" style={{columnGap: vs(10)}}>
        <TouchableOpacity
          onPress={() => {
            setPrice(prev => {
            return  prev > details?.price ? prev - details?.price : prev;
            });
            setQuantity(prev =>{
              return prev >=0 ? prev - 1 : prev
            })
          }}>
          <MinusVectorIcon />
        </TouchableOpacity>
        <View
          className=" rounded-2xl justify-center items-center"
          style={{
            height: vs(30),
            width: vs(30),
            borderColor: Colors.grayv3,
            borderWidth: vs(1),
            borderRadius: vs(10),
          }}>
          <PrimaryText
            content={quantity}
            style={'font-fsm text-secondary'}
            size={18}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setPrice(prev => {
              return  prev >= details?.price ? prev + details?.price : prev;
            });
            setQuantity(prev =>{
              return prev >=0 ? prev + 1 : prev
            })
          }}>
          <AddVectorIcon />
        </TouchableOpacity>
      </View>

      <PrimaryText content={price} style={'font-fb text-secondary'} size={22} />
    </View>
  );
};

export default QuantityPrice;
