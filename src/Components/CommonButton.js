import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CommonButton = (props) => {
  return (
    <TouchableOpacity onPress={()=>props.onPressFun()} activeOpacity={0.6} style={props.style}>
      <Text style={props.textStyle}>{props.label}</Text>
    </TouchableOpacity>
  );
}

export default CommonButton