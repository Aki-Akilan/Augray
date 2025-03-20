import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {windStyles} from '@utils/windStyles';
import {BarHeight} from '@utils/barHeight';
import {CustomImage, PrimaryText} from '@atoms/index';
import {Images} from '@images/index';
import {sizeConfig} from '@utils/sizeConfig';
import {CustomButton} from '@molecules/index';
import {navigate} from '@root/index';
import Animated from 'react-native-reanimated';
import {starterAnimation} from '@animation/starterAnimation';
import {StartAnimationHook} from '@hooks/index';

const PurchaseSuccess = () => {
  const shouldAnimate = StartAnimationHook();

  const handleHome = () => {
    navigate('Home');
  };
  return (
    <View className={`${windStyles.fx1} bg-white`}>
      <SafeAreaView className={windStyles.fx1} style={{paddingTop: BarHeight}}>
        <Animated.View
          {...(shouldAnimate ? starterAnimation('FadeInUp', 500, 500, 1) : {})}
          className={`${windStyles.fx1} justify-center item-center`}
          style={{rowGap: sizeConfig.vs(20)}}>
          <CustomImage
            source={Images.success}
            style={{
              height: sizeConfig.vs(200),
              width: sizeConfig.vs(200),
              alignSelf: 'center',
            }}
          />
          <PrimaryText
            style={'font-fsm text-secondary text-center'}
            content={'Your Order has been \n accepted'}
            size={24}
          />
          <PrimaryText
            style={'font-fr text-grayv2 text-center'}
            content={
              'Your items has been placcd and is on \n it’s way to being processed'
            }
            size={14}
          />
        </Animated.View>
      </SafeAreaView>
      <Animated.View
        {...(shouldAnimate ? starterAnimation('FadeInDown', 500, 500, 1) : {})}
        className="w-full "
        style={{
          paddingHorizontal: sizeConfig.ms(25),
          paddingVertical: sizeConfig.vs(30),
        }}>
        <CustomButton
          onClick={handleHome}
          style={'font-fsm text-whitev1'}
          size={18}
          content={'Back to Home'}
        />
      </Animated.View>
    </View>
  );
};

export default PurchaseSuccess;
