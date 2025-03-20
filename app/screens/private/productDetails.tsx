import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {windStyles} from '@utils/windStyles';
import {BarHeight} from '@utils/barHeight';
import {sizeConfig} from '@utils/sizeConfig';
import {
  CustomButton,
  ProductHeader,
  ProductImages,
  ProductInfo,
  QuantityPrice,
} from '@molecules/index';
import {CustomImage, PrimaryText} from '@atoms/index';
import {Images} from '@images/index';
import {goBack, navigate} from '@root/index';
import Animated from 'react-native-reanimated';
import {starterAnimation} from '@animation/starterAnimation';
import {StartAnimationHook} from '@hooks/index';

const ProductDetails = ({route: {params}}) => {
  const {vs, ms} = sizeConfig;
  const productDetails = params?.ProductDetails;
  const shouldAnimate = StartAnimationHook();
  const type = params?.type;
  console.log(productDetails, 'productDetails data details', params);
  const [quantity, setQuantity] = useState(productDetails?.quantity);

  const handleOrder = () => {
    navigate('purchaseSuccess');
  };
  return (
    <View className={windStyles.fx1} style={{backgroundColor: 'white'}}>
      <Animated.View
        {...(shouldAnimate ? starterAnimation('FadeInUp', 500, 500, 1) : {})}
        style={{
          height: vs(310),
          borderBottomLeftRadius: vs(20),
          borderBottomRightRadius: vs(20),
        }}
        className="bg-grayv4">
        <SafeAreaView
          className={`${windStyles.fx1}`}
          style={{
            paddingTop: BarHeight,
            height: vs(310),
            borderBottomLeftRadius: vs(20),
            borderBottomRightRadius: vs(20),
          }}>
          <View
            className="flex-row justify-between items-center"
            style={{paddingHorizontal: vs(20), marginTop: vs(10)}}>
            <TouchableOpacity
              onPress={() => {
                goBack();
              }}>
              <CustomImage
                source={Images.rightArrow}
                style={{height: vs(15), width: vs(15)}}
              />
            </TouchableOpacity>
            <CustomImage
              source={Images.share}
              style={{height: vs(17), width: vs(17)}}
            />
          </View>
          <ProductImages
            productImages={[productDetails?.image, productDetails?.image]}
          />
        </SafeAreaView>
      </Animated.View>
      <Animated.View
        {...(shouldAnimate ? starterAnimation('FadeInDown', 500, 500, 1) : {})}
        className={`${windStyles.fx1} bg-white`}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: vs(100)}}>
          <ProductHeader details={productDetails} />
          <QuantityPrice type={type} details={productDetails} />
          <ProductInfo />
        </ScrollView>

        <View
          className="w-full absolute bottom-10"
          style={{paddingHorizontal: ms(25), paddingTop: vs(30)}}>
          <CustomButton
            onClick={handleOrder}
            style={'font-fsm text-whitev1'}
            size={18}
            content={'Order Now'}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default ProductDetails;
