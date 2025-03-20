import {View, Text, Dimensions, ImageBackground} from 'react-native';
import React, {memo} from 'react';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {sizeConfig} from '@utils/sizeConfig';
import {Images} from '@images/index';
import {useSharedValue} from 'react-native-reanimated';
import { Colors } from '@theme/colors';

const data = [
  {key: '1', content: 'Get Up To 40% OFF', header: 'Fresh Vegetables'},
  {key: '2', content: 'Get Up To 40% OFF', header: 'Fresh Vegetables'},
  {key: '3', content: 'Get Up To 40% OFF', header: 'Fresh Vegetables'},
];
const Offers = memo(() => {
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
    <View style={{marginVertical:vs(10)}}>
      <Carousel
        ref={ref}
        width={wh * 0.9}
        height={vs(90)}
        data={data}
     
        style={{
          borderRadius: vs(10),
          alignSelf: 'center',
        }}
        renderItem={({item}) => (
          <ImageBackground
            source={Images.offerBackground}
            mode={'cover'}
            style={{height: vs(90), borderRadius: vs(20)}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#ccc',
                borderRadius: vs(20),
                paddingLeft: vs(70),
              }}>
              <Text
                className="font-acR text-secondary"
                style={{fontSize: vs(14)}}>
                {item.header}
              </Text>
              <Text
                className="font-fsm text-primary"
                style={{fontSize: vs(12)}}>
                {item.content}
              </Text>
            </View>
          </ImageBackground>
        )}
      />
      <Pagination.Basic
        data={data}
        progress={progress}
        dotStyle={{backgroundColor: '#D8D8D8',borderRadius:vs(50)}}
        activeDotStyle={{backgroundColor: Colors.primary}}
        containerStyle={{gap: 5, position:"absolute",bottom:10}}
        onPress={onPressPagination}
      />
    </View>
  );
});

export default Offers;
