import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {CustomImage, SecondaryText} from '@atoms/index';
import {Images} from '@images/index';
import {LocationVectorIcon} from '@vectors/vectorImages';
import {windStyles} from '@utils/windStyles';
import {sizeConfig} from '@utils/sizeConfig';
import Animated from 'react-native-reanimated';
import { StartAnimationHook } from '@hooks/index';
import { starterAnimation } from '@animation/starterAnimation';

const ShopHeader = memo(() => {
  const {vs} = sizeConfig;
  const shouldAnimate = StartAnimationHook();

  return (
    <Animated.View {...(shouldAnimate
      ? starterAnimation('FadeInUp', 500, 500, 1)
      : {})}>
      <View className="flex-row  items-center" style={{paddingHorizontal:vs(20)}}>
        <View>
          <CustomImage
            source={Images.hamburger}
            style={{height: vs(30), width: vs(20)}}
          />
        </View>

        <View style={{rowGap: vs(5), flex: 1}} className={windStyles.center}>
          <CustomImage
            source={Images.authLogo}
            style={{height: vs(30), width: vs(30)}}
          />
          <View className="flex-row " style={{columnGap: vs(5)}}>
            <LocationVectorIcon />
            <SecondaryText
              content="Guindy, Chennai"
              style={'font-fm text-blackv1'}
              size={15}
            />
          </View>
        </View>
      </View>

      <View style={{paddingVertical: vs(10),paddingHorizontal:vs(20)}}>
        <TouchableOpacity
          className="flex-row rounded-xl items-center bg-grayv4"
          style={{
            columnGap: vs(10),
            paddingVertical: vs(10),
            paddingHorizontal: vs(10),
          }}>
          <CustomImage
            source={Images.search}
            style={{height: vs(15), width: vs(15)}}
          />
          <SecondaryText
            content="Search Store"
            style={'font-fm text-blackv1'}
            size={14}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
});

export default ShopHeader;
