import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../Utils/Style';
import detailStyle from '../Screen/Detail/style';

const renderItems = (props) => {
  // console.log(props);
  return (
   <View style={detailStyle.renderView} >
       <Image style={detailStyle.renderImage} source={{uri:props?.item?.urls?.thumb}}/>
   </View>
  )
}

export default renderItems;