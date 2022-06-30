import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import settingStyles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export  const OptionList = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={settingStyles.optionListView} >
     <Text>{props.optionText}</Text>
     <MaterialIcons name={'keyboard-arrow-right'} size={20} />
    </TouchableOpacity>
  )
}

