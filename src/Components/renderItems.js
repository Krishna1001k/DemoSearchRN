import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from '../Utils/Style';
import detailStyle from '../Screen/Detail/style';

const renderItems = (props) => {
  return (
   <View style={detailStyle.renderView} >
       <Image style={detailStyle.renderImage} source={{uri:props.urls.thumb}}/>
   </View>
  )
}

export default renderItems;