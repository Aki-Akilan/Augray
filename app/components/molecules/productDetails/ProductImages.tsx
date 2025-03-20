import {View, Text, Dimensions, ImageBackground} from 'react-native';
import React, {memo} from 'react';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {sizeConfig} from '@utils/sizeConfig';
import {Images} from '@images/index';
import {useSharedValue} from 'react-native-reanimated';
import {Colors} from '@theme/colors';
import {CustomImage} from '@atoms/index';


const ProductImages = memo(({productImages}) => {
  const progress = useSharedValue<number>(0);
  const {vs, ms, wh} = sizeConfig;
  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <View style={{marginVertical: vs(10)}}>
      <Carousel
        ref={ref}
        width={wh * 0.9}
        height={vs(200)}
        data={productImages}
        style={{
          borderRadius: vs(10),
          alignSelf: 'center',
        }}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: '#ccc',
              borderRadius: vs(20),
              height: vs(200),
            }}>
            <CustomImage
              source={item}
              style={{height: vs(200), width: vs(200),


              }}
            />
           
          </View>
        )}
      />
      <Pagination.Basic
        data={productImages}
        progress={progress}
        dotStyle={{backgroundColor: '#D8D8D8', borderRadius: vs(50)}}
        activeDotStyle={{backgroundColor: Colors.primary}}
        containerStyle={{gap: 5,marginTop:10}}
        onPress={onPressPagination}
      />
    </View>
  );
});

export default ProductImages;
