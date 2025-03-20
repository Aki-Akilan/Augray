import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import React from 'react';
import {Images} from '@images/index';
import {windStyles, BarHeight, sizeConfig} from '@utils/index';
import {CustomImage, CustomText, SecondaryText} from '@atoms/index';
import {CustomButton} from '@molecules/index';
import { navigate } from '@root/index';
import { grayv3 } from '@theme/tailwindColors';
import Animated from 'react-native-reanimated';
import { starterAnimation } from '@animation/starterAnimation';
import { StartAnimationHook } from '@hooks/index';

const WelcomeScreen = () => {
  const {vs, ms} = sizeConfig;
  const shouldAnimate = StartAnimationHook();


  const handleStart =()=>{
    navigate("auth")
  }
  return (
    <ImageBackground
      className={windStyles.fx1}
      source={Images.welcomeBackground}>
      <SafeAreaView className={windStyles.fx1} style={{paddingTop: BarHeight}}>
        <Animated.View {...(shouldAnimate
                  ? starterAnimation('FadeInUp', 1000, 1000, 1)
                  : {})} className={`${windStyles.fx1} justify-end item-center`}>
          <View
            className={windStyles.center}
            style={{paddingVertical: vs(50)}}>
              <Animated.View {...(shouldAnimate
                  ? starterAnimation('FadeInUp', 1000, 1000, 1)
                  : {})} style={{rowGap:vs(10)}} className={windStyles.center}>

            <CustomImage
              source={Images.welcomeLogo}
              style={{
                height: vs(65),
                width: vs(65),
              }}
            />

            <CustomText
              style={'font-fsm text-white text-center'}
              size={42}
              content={`Welcome\n to our store`}
            />
            <SecondaryText
              content={'Get your groceries in as fast as one hour'}
              style={"text-grayv3 font-fm"}
            />
              </Animated.View>

            <Animated.View  {...(shouldAnimate
                  ? starterAnimation('FadeInDown', 1000, 1000, 1)
                  : {})} className="w-full" style={{paddingHorizontal: ms(25),paddingTop:vs(30)}}>
              <CustomButton
                onClick={handleStart}
                style={'font-fsm text-whitev1'}
                size={18}
                content={'Get Started'}
              />
            </Animated.View>
          </View>
        </Animated.View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;
