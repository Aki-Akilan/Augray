import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {CustomImage, PrimaryText} from '@atoms/index';
import {Images} from '@images/index';
import {sizeConfig} from '@utils/sizeConfig';
import {Colors} from '@theme/colors';

const ProductInfo = () => {
  const {vs} = sizeConfig;
  const [activeSections, setActiveSections] = useState([]);

  const SECTIONS = [
    {
      title: 'Product Details',
      content:
        'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
    },
    {
      title: 'Nutritions',
      content:
        'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
    },
    {
      title: 'Review',
      content:
        'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
    },
  ];

  const renderHeader = (section, other) => {
    console.log(section, other, 'header render', activeSections);
    return (
      <View
        className="flex-row justify-between items-center"
        style={{
          paddingVertical: vs(20),
          borderColor: Colors.grayv3,
          // borderTopWidth: vs(0.5),
          borderBottomWidth: vs(0.5),
        }}>
        <PrimaryText
          content={section.title}
          style={'font-fsm text-secondary '}
          size={16}
        />
        <View className='flex-row items-center' style={{columnGap:vs(5)}}>
          <View className='flex-row item-center' style={{columnGap:vs(5)}}>

        {other == 2&& [1,2,3,4,5].map(data=>{
          return  <CustomImage
          source={
             Images.rating
          }
          style={{
            height: vs(11),
            width: vs(11),
          }}
          />
        })}

        {other ==1 && <View className='bg-gray-200 rounded-lg' style={{paddingVertical:vs(3),paddingHorizontal:vs(6)}}>
          <PrimaryText
          content={"200g"}
          style={'font-fsm text-grayv2 '}
          size={10}
        />
          </View>}
          </View>

        <CustomImage
          source={
            activeSections.includes(other) ? Images.downArrow : Images.rArrow
          }
          style={{
            height: vs(11),
            width: vs(11),
          }}
          />
          </View>
      </View>
    );
  };

  const renderContent = section => {
    return (
      <View style={{paddingVertical: vs(10)}}>
        <Text className='font-fr text-grayv2' style={{lineHeight:vs(15)}}>{section.content}</Text>
      </View>
    );
  };

  const updateSections = activeSections => {
    setActiveSections(activeSections);
  };
  return (
    <View style={{paddingHorizontal: vs(20)}}>
      <Accordion
        sections={SECTIONS}
        expandMultiple
        underlayColor="none"
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
      />
    </View>
  );
};

export default ProductInfo;
