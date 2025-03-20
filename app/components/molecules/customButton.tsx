import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { CustomText } from '@atoms/index'
import { sizeConfig } from '@utils/sizeConfig'
import { windStyles } from '@utils/windStyles'

const CustomButton = memo(({style,size,content,onClick}) => {
  return (
   <TouchableOpacity onPress={onClick} className={`bg-primary  ${windStyles.center}`} style={{height:sizeConfig.vs(52),borderRadius:sizeConfig.ms(15)}}>
    <CustomText style={style} size={size} content={content}/>
   </TouchableOpacity>
  )
})

export default CustomButton