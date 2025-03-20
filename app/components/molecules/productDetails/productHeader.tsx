import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CustomImage, PrimaryText } from '@atoms/index'
import { windStyles } from '@utils/windStyles'
import { sizeConfig } from '@utils/sizeConfig'
import { Images } from '@images/index'

const ProductHeader = ({details}) => {
const {vs}=sizeConfig
  return (
    <View
      className="flex-row items-center justify-between"
      style={{paddingHorizontal: vs(20),marginTop:vs(10)}}>
      <View style={{rowGap: vs(3)}}>
        <PrimaryText
          style={details.name}
          size={22}
        />
        <PrimaryText
          style={'font-fb text-grayv2 text-left '}
          content={details.content}
          size={14}
        />
      </View>
      <View>
        <TouchableOpacity>
          <CustomImage
            source={Images.fav}
            style={{height: vs(20), width: vs(20)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductHeader