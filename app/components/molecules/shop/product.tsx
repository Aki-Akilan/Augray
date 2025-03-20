import {View, Text, TouchableOpacity} from 'react-native';
import React, { memo } from 'react';
import {CustomImage, PrimaryText} from '@atoms/index';
import {Images} from '@images/index';
import {sizeConfig} from '@utils/sizeConfig';
import { navigate } from '@root/index';

const Product = memo(({item,type}) => {
    const {vs}=sizeConfig
console.log(item,"product data details")
    const handleProduct = () =>{
      navigate("productDetails",{ProductDetails:item,type})
    }
  return (
    <TouchableOpacity onPress={handleProduct} style={{borderRadius:vs(15),width:vs(120),paddingVertical:vs(10),borderWidth:vs(1)}} className='border-[#E2E2E2]  justify-center items-center '>
      <View className='justify-center items-center ' style={{paddingHorizontal:vs(15)}}>
        <CustomImage
          source={item?.image}
          style={{height: vs(70), width:vs(70)}}
        />
        <View style={{rowGap:vs(2)}}>

        <PrimaryText
          style={'font-fsm text-secondary text-left'}
          content={item?.name}
          size={11}
          />
        <PrimaryText
          style={'font-fr text-grayv2 text-left '}
          content={item?.content}
          size={10}
          />
          </View>

        <View className='flex-row justify-between items-center w-full  '>
          <PrimaryText
            style={'font-fsm text-secondary '}
            content={`₹ ${item?.price}`}
            size={14}
          />
          <View className='bg-primary rounded-2xl justify-center items-center' style={{height:vs(30),width:vs(30),}}>
            <CustomImage
              source={Images.add}
              style={{height:vs(12), width: vs(12)}}
              />
              </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default Product;
