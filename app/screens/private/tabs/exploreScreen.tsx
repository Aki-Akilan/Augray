import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {windStyles} from '@utils/windStyles';
import {BarHeight} from '@utils/barHeight';
import {ExploreHeader, ExploreList} from '@molecules/index';
import { useAppSelector } from '@hooks/index';

const ExploreScreen = () => {
  const products = useAppSelector(state => state?.products);

  return (
    <View className={windStyles.fx1}>
      <SafeAreaView
        className={`${windStyles.fx1} bg-white`}
        style={{paddingTop: BarHeight}}>
        <ExploreHeader />
        <ExploreList products={products?.categories}/>
        {/* <Text>dwkjdw</Text> */}
      </SafeAreaView>
    </View>
  );
};

export default ExploreScreen;
