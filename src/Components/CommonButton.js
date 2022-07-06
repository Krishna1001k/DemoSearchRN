import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CommonButton = (props) => {

  

  // console.log('asdfasdfsadfasfasf',false&&false,props.buttonDisable&true);

  return (
    <TouchableOpacity
      disabled={!props?.buttonDisable}
      onPress={() => props.onPressFun()}
      activeOpacity={0.6}
      style={props.style}>
      <Text style={props.textStyle}>{props.label}</Text>
    </TouchableOpacity>
  );
}

export default CommonButton