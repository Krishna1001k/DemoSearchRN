import {View,Text,TouchableOpacity,Image} from 'react-native'
import React, { useContext } from "react";
import { useDispatch } from 'react-redux';
import ApiCall from '../Redux/Home/action';
import styles from './Style';
import detailStyle from '../Screen/Detail/style';

export const rendring = (item, navigation) => {

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('detail', item)}
        activeOpacity={0.7}
        style={styles.cards}>
        <Text style={styles.cardHeaderText}>{item.user.name}</Text>
        <Image style={styles.cardsImage} source={{uri: item.urls.small}} />
      </TouchableOpacity>
    );
  };

export const CommonApiCall=(text,successCallBack,failureCallback)=>{

    return(
    ApiCall(
      text,
      value => {console.log(value) },
      value => {console.log(value) },
    ))
  }

      
      