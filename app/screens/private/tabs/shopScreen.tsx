import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {windStyles} from '@utils/windStyles';
import {BarHeight} from '@utils/barHeight';
import {CustomImage, PrimaryText, SecondaryText} from '@atoms/index';
import {Images} from '@images/index';
import {sizeConfig} from '@utils/sizeConfig';
import {LocationVectorIcon} from '@vectors/vectorImages';
import {ProductList, Offers, ShopHeader} from '@molecules/index';
import {StartAnimationHook, useAppSelector} from '@hooks/index';
import Animated from 'react-native-reanimated';
import {starterAnimation} from '@animation/starterAnimation';

const ShopScreen = () => {
  const {vs, ms} = sizeConfig;
  const products = useAppSelector(state => state?.products);
  const shouldAnimate = StartAnimationHook();

  return (
    <View className={windStyles.fx1}>
      <SafeAreaView
        className={`${windStyles.fx1} bg-white`}
        style={{paddingTop: BarHeight}}>
        <ShopHeader />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: vs(30)}}>
          <Animated.View
            {...(shouldAnimate
              ? starterAnimation('FadeInDown', 500, 500, 1)
              : {})}>
            <Offers />
            <ProductList
              type={'exclusive'}
              name={'Exclusive Offer'}
              products={products?.exclusiveProduct}
            />
            <ProductList
              type={'bestselling'}
              name={'Best Selling'}
              products={products?.bestsellingProducts}
            />
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ShopScreen;
