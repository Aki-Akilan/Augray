import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {CustomImage, PrimaryText} from '@atoms/index';
import {sizeConfig} from '@utils/sizeConfig';
import {Images} from '@images/index';

const ExploreList = ({products}) => {
  const {vs} = sizeConfig;

  const colors = [
    {light: '#EEF7F1', dark: '#61B780'},
    {light: '#FEF6ED', dark: '#FABD7C'},
    {light: '#FDE9E4', dark: '#F7A593'},
    {light: '#F4EBF7', dark: '#D3B0E0'},
    {light: '#FFF9E5', dark: '#FDE598'},
    {light: '#EDF7FD', dark: '#B7DFF5'},
  ];

  const renderExplores = ({item, index}) => {
    const colorData = colors[index % colors.length];

    return (
      <View
        className={`justify-center items-center  `}
        style={{
          paddingHorizontal: vs(30),
          backgroundColor: colorData?.light,
          borderColor: colorData?.dark,
          borderWidth: vs(0.5),
          borderRadius:vs(10),
          paddingVertical:vs(15),
          
          
        }}>
        <CustomImage
          source={item.image}
          style={{height: vs(70), width: vs(70)}}
        />
        <View style={{marginTop:vs(10)}}>
          <PrimaryText
            style={'font-fb text-secondary text-left'}
            content={item?.name}
            size={13}
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderExplores}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-evenly',
          
          marginBottom: 10,
        }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          columnGap:vs(10),
          rowGap:vs(10),
        }}
      />
    </View>
  );
};

export default ExploreList;
