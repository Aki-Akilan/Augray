import {View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {CustomImage, PrimaryText, SecondaryText} from '@atoms/index';
import {Images} from '@images/index';
import {sizeConfig} from '@utils/sizeConfig';

const ExploreHeader = memo(() => {
  const {vs} = sizeConfig;

  return (
    <>
      <View
        className="flex-row  items-center justify-center"
        style={{paddingHorizontal: vs(20),paddingTop:vs(20)}}>
        <PrimaryText
          content="Find Products"
          style={'font-fsm text-secondary '}
          size={18}
        />
      </View>

      <View style={{paddingVertical: vs(15), paddingHorizontal: vs(20)}}>
        <TouchableOpacity
          className="flex-row rounded-xl items-center bg-grayv4"
          style={{
            columnGap: vs(10),
            paddingVertical: vs(10),
            paddingHorizontal: vs(10),
          }}>
          <CustomImage
            source={Images.search}
            style={{height: vs(15), width: vs(15)}}
          />
          <SecondaryText
            content="Search Store"
            style={'font-fm text-blackv1'}
            size={14}
          />
        </TouchableOpacity>
      </View>
    </>
  );
});

export default ExploreHeader;
