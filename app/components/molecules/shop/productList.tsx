import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {PrimaryText, SecondaryText} from '@atoms/index';
import {sizeConfig} from '@utils/sizeConfig';
import Product from './product';

const ProductList = ({name,products,type}) => {

  const {vs} = sizeConfig;
  const renderProducts = ({item,index}) => (
   <Product type={type} item={item} key={index}/>
  );
  return (
    <View style={{paddingHorizontal: vs(20), paddingVertical: vs(5)}}>
      <View className="flex-row justify-between items-center">
        <PrimaryText
          style={'font-fsm text-secondary'}
          content={name}
          size={22}
        />
        <SecondaryText
          style={'text-primary font-fm'}
          content={'See all'}
          size={15}
        />
        
      </View>
      <View style={{paddingVertical:vs(15)}}>

      <FlatList
          data={products}
          renderItem={renderProducts}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
          contentContainerStyle={{columnGap:vs(10)}}
          />
    </View>
    </View>
  );
};

export default ProductList;
