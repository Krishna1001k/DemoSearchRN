import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import detailStyle from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const BackButton = (props) => {

    return(
        <TouchableOpacity
        style={detailStyle.backArrowView}
        onPress={props.onPress}>
        <Ionicons name={'arrow-back'} size={35} />
      </TouchableOpacity>
    )

}