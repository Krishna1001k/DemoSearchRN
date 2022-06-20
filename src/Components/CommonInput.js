import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from '../Utils/Style';
const CommonInput = props => {

  return (
    <View style={styles.TextInputView}>
      <Text>{props.placeholder}</Text>
      <TextInput onChangeText={(txt)=>props.callbackFun(txt)} placeholder={props.placeholder} />
    </View>
  );
};

export default CommonInput;
